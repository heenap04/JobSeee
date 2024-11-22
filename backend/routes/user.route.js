// import express from "express";
// import { register, login, updateprofile, logout } from "../controllers/user.controller.js";
// import isAuthenticated from "../middlewares/isAuthenticated.js";// Assuming you have a middleware for authentication

// const router = express.Router();

// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/profile/update").post(isAuthenticated, updateprofile);
// router.route("/logout").get(logout);

// export default router;

// user.route.js
import express from "express";
import { register, login, updateprofile, logout } from "../controllers/userController.js"; 
import isAuthenticated from "../middlewares/isAuthenticated.js"; 
// import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile/update").post(isAuthenticated, updateprofile);
router.route("/logout").get(logout);

export default router;