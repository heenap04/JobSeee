// const pdfParse = require("pdf-parse");
// const textract = require("textract");
// const fs = require("fs");
// const Resume = require("../models/Resume");

// exports.uploadResume = async (req, res) => {
//   const file = req.file;

//   if (!file) {
//     return res.status(400).send("No file uploaded");
//   }

//   try {
//     let data;
//     if (file.mimetype === "application/pdf") {
//       const fileBuffer = fs.readFileSync(file.path);
//       data = await pdfParse(fileBuffer);
//     } else {
//       data = await new Promise((resolve, reject) => {
//         textract.fromFileWithPath(file.path, (err, text) => {
//           if (err) reject(err);
//           else resolve(text);
//         });
//       });
//     }

//     const parsedData = parseResumeData(data.text || data);

//     // Save to MongoDB (optional)
//     const newResume = new Resume(parsedData);
//     await newResume.save();

//     res.json({ success: true, parsedData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error parsing the resume");
//   } finally {
//     fs.unlinkSync(file.path); // Clean up the file
//   }
// };

// function parseResumeData(text) {
//   const nameMatch = text.match(/Name:\s*(.*)/);
//   const emailMatch = text.match(/Email:\s*(.*)/);
//   const phoneMatch = text.match(/Phone:\s*(.*)/);

//   return {
//     name: nameMatch ? nameMatch[1] : null,
//     email: emailMatch ? emailMatch[1] : null,
//     phone: phoneMatch ? phoneMatch[1] : null,
//     skills: extractSkills(text),
//     experience: extractExperience(text),
//   };
// }

// function extractSkills(text) {
//   const skills = ["JavaScript", "React", "Node.js", "MongoDB"];
//   return skills.filter(skill => text.includes(skill));
// }

// function extractExperience(text) {
//   const expMatch = text.match(/Experience:\s*(.*)/);
//   return expMatch ? expMatch[1] : null;
// }
