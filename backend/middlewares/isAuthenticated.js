// import jwt from "jsonwebtoken";

// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if (!token) {
//             return res.status(401).json({
//                 message: "User not authenticated",
//                 success: false,
//             })
//         }
//         const decode = await jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(401).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         };
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default isAuthenticated;


import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  try {
    // Retrieve token from cookies
    const token = req.cookies?.token; 

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        message: "Authentication failed: No token provided",
        success: false,
      });
    }

    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Attach userId from decoded token to the request object
    req.id = decoded.userId; // Assumes the token payload includes id

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Authentication error:", error);

    // Handle specific JWT errors
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        message: "Authentication failed: Invalid token",
        success: false,
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Authentication failed: Token expired",
        success: false,
      });
    }

    // Handle other errors
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export default isAuthenticated;