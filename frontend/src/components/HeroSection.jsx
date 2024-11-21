import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    };

    return (
        <div
            className="relative flex items-center justify-center bg-cover bg-center text-center text-white"
            style={{
                height: '90vh', // Full viewport height
                backgroundImage: 'url("https://media.istockphoto.com/id/2150164967/vector/robot-and-people-comparsion-vector.jpg?s=612x612&w=0&k=20&c=Y2oohOaOwZ52aU46zT9vJYR3AvLMth5-x8p8fEfjrgw=")',
                backgroundColor: '#DAC09B',
                filter: 'brightness(75%)',
            }}
        >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content Section */}
            <div className="relative z-10 max-w-4xl px-4 text-center">
                <span className="px-4 py-2 text-lg font-medium text-[#F83002] bg-white bg-opacity-90 rounded-full shadow-lg">
                    Elevating Your Job Search
                </span>
                <h1 className="mt-6 text-6xl font-extrabold leading-tight">
                    Turning Aspirations into Achievements <br />
                    <span className="text-[#FF8C00]">Job by Job!</span>
                </h1>
                <p className="mt-4 text-xl font-light">
                    Unleashing your potential with every opportunity – because the career you dream of is just a step away!
                </p>
                <div className="flex w-[60%] mt-8 mx-auto border border-gray-300 pl-3 rounded-full items-center gap-4 bg-white bg-opacity-90 shadow-lg">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent text-black placeholder-gray-500"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#FF8C00]">
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;


