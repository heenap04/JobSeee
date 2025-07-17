// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import connectDB from "./utils/db.js";
// import userRoute from "./routes/user.route.js";
// import jobRoute from "./routes/job.route.js";
// import applicationRoute from "./routes/application.route.js";
// import companyRoute from  "./routes/company.route.js";


// dotenv.config({});

// const app = express();


// // middleware
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(cookieParser());
// const corsOptions = {
//     origin:'http://localhost:5173',
//     credentials:true
// }

// app.use(cors(corsOptions));

// const PORT = process.env.PORT || 3000;


// // api's
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/company", companyRoute);
// app.use("/api/v1/job", jobRoute);
// app.use("/api/v1/application", applicationRoute);



// app.listen(PORT,()=>{
//     connectDB();
//     console.log(`Server running at port ${PORT}`);
// })
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import pdfParse from "pdf-parse";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import companyRoute from "./routes/company.route.js";

dotenv.config({});

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

// Set up multer for file uploads
const upload = multer({ dest: "uploads/" }); // Store uploaded files in "uploads" folder

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// // Resume Parsing Route
// app.post("/api/v1/resume", upload.single("resume"), async (req, res) => {
//   try {
//     const file = req.file;

//     if (!file) {
//       return res.status(400).json({ message: "No file uploaded" });
//     }

//     // Read and parse the uploaded resume (assumes PDF files)
//     const fs = await import("fs/promises");
//     const fileBuffer = await fs.readFile(file.path); // Load the file as a buffer

//     // Use pdf-parse to extract text from the PDF
//     const pdfData = await pdfParse(fileBuffer);

//     // Return the extracted text
//     res.status(200).json({
//       message: "Resume parsed successfully",
//       extractedText: pdfData.text, // Extracted text from the resume
//     });
//   } catch (error) {
//     console.error("Error parsing resume:", error);
//     res.status(500).json({ message: "Error parsing resume", error: error.message });
//   }
// });

// Connect to Database and Start Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
