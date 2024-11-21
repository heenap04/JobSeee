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
            className="relative flex items-center justify-center bg-cover bg-center text-center"
            style={{
                height: '90vh',
                backgroundImage: 'url("https://media.istockphoto.com/id/1389345285/vector/people-and-robots-waiting-in-line-for-job-interview-human-and-robotics-employees-for-vacancy.jpg?s=612x612&w=0&k=20&c=UbKzdWNPZ5lr670eR5K0BWLvmFiSIk0hljslMIXvT5c=")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#9e7c53] opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl px-4 flex flex-col gap-5 items-center">
                <span className="px-4 py-2 text-lg font-medium text-[#F83002] bg-gray-100 rounded-full">
                    Elevating Your Job Search
                </span>
                <h1 className="text-5xl font-bold text-white">
                    Turning Aspirations into Achievements <br />
                    <span className="text-[#6A38C2]">Job by Job!</span>
                </h1>
                <p className="text-white text-center">
                    Unleashing your potential with every opportunity – because the career you dream of is just a step away!
                </p>
                <div className="flex w-[50%] border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white bg-opacity-90 shadow-lg">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent text-black placeholder-gray-500"
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className="h-5 w-5 text-white" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
