// import axios from "axios";

// const sendAnalyticsEvent = async (userId, eventName, eventData) => {
//     try {
//         const measurementId = "G-PKXP6Q3KZE"; // Replace with your GA4 Measurement ID
//         const apiSecret = "pIYRFYWPRtKO54Z-VkaLSA"; // Replace with your API Secret
//         const url = `https://www.google-analytics.com/mp/collect?measurement_id=${measurementId}&api_secret=${apiSecret}`;

//         const payload = {
//             client_id: userId || "anonymous",
//             events: [
//                 {
//                     name: eventName,
//                     params: eventData,
//                 },
//             ],
//         };

//         await axios.post(url, payload);
//         console.log(`Analytics event "${eventName}" sent successfully.`);
//     } catch (error) {
//         console.error("Error sending analytics event:", error.message);
//     }
// };

// // Exporting the function as default
// export default sendAnalyticsEvent;
