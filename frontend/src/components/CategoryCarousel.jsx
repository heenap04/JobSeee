// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setSearchedQuery } from "@/redux/jobSlice";

// const categories = [
//     "Frontend Developer",
//     "Backend Developer",
//     "Data Science",
//     "Graphic Designer",
//     "FullStack Developer",
//     "Product Manager",
//     "UI/UX Designer",
//     "Cloud Engineer",
//     "DevOps Specialist",
// ];

// const pastelColors = [
//     "#DDE9F8", // Pastel Lavender (light blue)
// ];

// const CategoryCarousel = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const itemsPerPage = 3;

//     const searchJobHandler = (query) => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex > 0 ? prevIndex - itemsPerPage : 0
//         );
//     };

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex + itemsPerPage < categories.length
//                 ? prevIndex + itemsPerPage
//                 : prevIndex
//         );
//     };

//     return (
//         <div className="py-12 bg-[#f8f9fa] relative">
//             <h2 className="text-3xl font-bold text-center mb-8 text-[#FF8C00]">
//                 Explore Job Categories
//             </h2>
//             <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-center">
//                 {/* Left Arrow */}
//                 <button
//                     onClick={handlePrev}
//                     className="absolute left-[-30px] text-[#FF8C00] z-10 transform hover:scale-110 transition duration-300"
//                     style={{ top: "50%", transform: "translateY(-50%)" }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M15 19l-7-7 7-7"
//                         />
//                     </svg>
//                 </button>

//                 {/* Carousel */}
//                 <div className="flex justify-center space-x-6 overflow-hidden transition-transform duration-500 ease-in-out">
//                     {categories
//                         .slice(currentIndex, currentIndex + itemsPerPage)
//                         .map((category, index) => {
//                             const isEvenIndex = (currentIndex + index) % 2 === 0;
//                             return (
//                                 <div
//                                     key={index}
//                                     className={`flex-shrink-0 w-[30%] rounded-lg p-6 text-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl ${
//                                         isEvenIndex ? "bg-[#FFBF61]" : pastelColors[0]
//                                     }`}
//                                     style={{
//                                         color: isEvenIndex ? "black" : "#FF8C00", // Text color change based on background
//                                         fontWeight: !isEvenIndex ? "bold" : "normal", // Bold text for pastel lavender
//                                         boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Adding shadow
//                                         transition: "all 0.3s ease-in-out",
//                                     }}
//                                 >
//                                     <div className="transform hover:scale-105 transition-all duration-300">
//                                         <h3
//                                             className="text-xl font-semibold"
//                                             style={{
//                                                 color: isEvenIndex ? "black" : "#FF8C00", // Text color change based on background
//                                             }}
//                                         >
//                                             {category}
//                                         </h3>
//                                         <p
//                                             className="text-base mt-2"
//                                             style={{
//                                                 color: isEvenIndex ? "black" : "#FF8C00", // Text color change based on background
//                                             }}
//                                         >
//                                             Find the best opportunities as a {category}.
//                                         </p>
//                                         <Button
//                                             onClick={() => searchJobHandler(category)}
//                                             className={`mt-4 rounded-full px-6 py-2 transition-colors duration-300 ${
//                                                 isEvenIndex
//                                                     ? "bg-black text-white hover:bg-gray-800"
//                                                     : "bg-[#FF8C00] text-white hover:bg-[#FF5A00]"
//                                             }`}
//                                         >
//                                             Explore
//                                         </Button>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                 </div>

//                 {/* Right Arrow */}
//                 <button
//                     onClick={handleNext}
//                     className="absolute right-[-30px] text-[#FF8C00] z-10 transform hover:scale-110 transition duration-300"
//                     style={{ top: "50%", transform: "translateY(-50%)" }}
//                 >
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         className="w-6 h-6"
//                     >
//                         <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M9 5l7 7-7 7"
//                         />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CategoryCarousel;


import React, { useState } from "react";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchedQuery } from "@/redux/jobSlice"; // Adjust according to your redux setup

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
  "Product Manager",
  "UI/UX Designer",
  "Cloud Engineer",
  "DevOps Specialist",
];

const pastelColors = [
    "#FFBF61", // Pastel Orange
    "#B8A9C9", // Pastel Lavender
    "#FDCB82", // Pastel Yellow
    "#9AD0A3", // Pastel Green
    "#F7A7B1", // Pastel Pink
    "#8BB8B9", // Pastel Teal
  ];
  
  
  const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
  
    const searchJobHandler = (query) => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - itemsPerPage : 0
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + itemsPerPage < categories.length
          ? prevIndex + itemsPerPage
          : prevIndex
      );
    };
  
    return (
      <div className="py-12 bg-[#f8f9fa] relative min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#FF8C00]">
          Explore Job Categories
        </h2>
        <div className="relative max-w-6xl mx-auto px-4 flex items-center justify-between gap-12 h-full">
          {/* Image on the Left */}
          <div className="w-full md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1311578363/vector/job-seekers-abstract-concept-vector-illustration.jpg?s=612x612&w=0&k=20&c=ieKtXYMM2qKpdSw6xQnCqPG9tBQOQmjy47gYo32YdvQ="
              alt="Category"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
  
          {/* Carousel Boxes on the Right */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6 h-full">
            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-0 text-[#FF8C00] z-10 transform hover:scale-110 transition duration-300"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
  
            {/* Carousel */}
            <div className="flex justify-center space-x-6 overflow-hidden transition-transform duration-500 ease-in-out">
              {categories
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((category, index) => {
                  const isEvenIndex = (currentIndex + index) % 2 === 0;
                  return (
                    <div
                      key={index}
                      className={`flex-shrink-0 w-[30%] rounded-lg p-6 text-center transition-transform duration-300 ease-in-out transform hover:shadow-lg hover:scale-105`}
                      style={{
                        backgroundColor: isEvenIndex
                          ? "#FFBF61"
                          : pastelColors[0],
                        color: isEvenIndex ? "black" : "#FF8C00", // Text color change based on background
                        fontWeight: !isEvenIndex ? "bold" : "normal", // Bold text for pastel lavender
                      }}
                    >
                      <h3 className="text-xl font-semibold">{category}</h3>
                      <p className="text-base mt-2">Find the best opportunities in {category}.</p>
                      <button
                        onClick={() => searchJobHandler(category)}
                        className={`mt-4 rounded-full px-6 py-2 transition-colors duration-300 ${
                          isEvenIndex
                            ? "bg-black text-white hover:bg-gray-800"
                            : "bg-[#FF8C00] text-white hover:bg-[#FF5A00]"
                        }`}
                      >
                        Explore
                      </button>
                    </div>
                  );
                })}
            </div>
  
            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-0 text-[#FF8C00] z-10 transform hover:scale-110 transition duration-300"
              style={{
                top: "50%",
                transform: "translateY(-50%)",
                padding: "10px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default CategoryCarousel;
  
