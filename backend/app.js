// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import fileUpload from "express-fileupload";
// import userRouter from "./routes/userRoutes.js";
// import applicationRouter from "./routes/application.route.js";
// import jobRouter from "./routes/job.route.js";
// import { dbConnection } from "./database/dbConnection.js";
// import {errorMiddleware} from "./middlewares/error.js";

// const app = express()
// dotenv.config({path:"./config/config.env"});

// app.use(
//     cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ['GET','POST','DELETE','PUT'],
//     credentials: true,
// })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use(fileUpload({
//     useTempFiles:true,
//     tempFileDir:"/tmp/",
// }));


// app.use('/api/v1/user',userRouter);
// app.use('/api/v1/application',applicationRouter);
// app.use('/api/v1/job',jobRouter);


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import compression from "compression";
import userRoute from "./routes/user.route.js";
import companyRouter from "./routes/company.route.js"; 
import applicationRouter from "./routes/application.route.js";
import jobRouter from "./routes/job.route.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import { 
    createRateLimiter, 
    securityHeaders, 
    sanitizeData, 
    requestLogger 
} from "./middlewares/security.js";

const app = express()
dotenv.config({ path: "./config/config.env" });

// Security middleware
app.use(securityHeaders);
app.use(requestLogger);
app.use(compression()); // Compress responses

// Rate limiting
app.use('/api/', createRateLimiter(15 * 60 * 1000, 100)); // 100 requests per 15 minutes
app.use('/api/v1/user/login', createRateLimiter(15 * 60 * 1000, 5)); // 5 login attempts per 15 minutes
app.use('/api/v1/user/register', createRateLimiter(60 * 60 * 1000, 3)); // 3 registrations per hour

// CORS configuration
app.use(
    cors({
        origin: [process.env.FRONTEND_URL || 'http://localhost:5173'],
        methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
        credentials: true,
        optionsSuccessStatus: 200
    })
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Data sanitization
app.use(sanitizeData);

// File upload configuration
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
    abortOnLimit: true
}));

app.use('/api/v1/user',userRoute);
app.use('/api/v1/company', companyRouter); 
app.use('/api/v1/job',jobRouter);
app.use('/api/v1/application',applicationRouter);



dbConnection();

app.use(errorMiddleware);

export default app;