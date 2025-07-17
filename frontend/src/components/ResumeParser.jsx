// import React, { useState } from 'react';

// function ResumeParser() {
//   const [file, setFile] = useState(null);
//   const [parsedData, setParsedData] = useState(null);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFile(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!file) {
//       alert("Please upload a file");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("resume", file);

//     try {
//       const response = await fetch('http://localhost:3000/api/v1/application/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setParsedData(data);
//       } else {
//         alert('Error parsing resume');
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       alert('An error occurred while uploading the file');
//     }
//   };

//   return (
//     <div>
//       <h1>Resume Parser</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="file"
//           onChange={handleFileChange}
//           accept=".pdf,.docx"
//         />
//         <button type="submit">Upload and Parse</button>
//       </form>

//       {parsedData && (
//         <div>
//           <h2>Parsed Data</h2>
//           <pre>{JSON.stringify(parsedData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ResumeParser;
