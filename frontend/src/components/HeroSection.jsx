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
    }

    return (
        <div className="relative text-center bg-cover bg-center" style={{ height: '68vh' }}>
            {/* Background Image with Blackish Blur */}
            <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ 
                    backgroundImage: 'url("https://media.istockphoto.com/id/1397271218/vector/robots-and-human-applicants-characters-wait-in-queue-for-hiring-interview-at-office-hall-hr.jpg?s=612x612&w=0&k=20&c=KymMOgkKkxhM7ifJiE3-HexFtAc2jiwZgF4RMtxlmKw=")', 
                    filter: 'blur(2.5px) brightness(70%)' 
                }}
            ></div>
            {/* Content Section */}
            <div className='relative z-10 flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>Elevating Your Job Search</span>
                <h1 className='text-5xl font-bold text-white'>Turning Aspirations into Achievements <br /><span className='text-[#6A38C2]'>Job by Job!</span></h1>
                <p className="text-white">Unleashing your potential with every opportunity - because the career you dream of is just a step away!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    );
}
//hello
export default HeroSection;
