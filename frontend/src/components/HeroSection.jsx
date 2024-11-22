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
            className="relative flex bg-cover bg-no-repeat text-white"
            style={{
                height: '70vh',
                backgroundColor: '#FBEBC8',
                backgroundImage: 'url("https://media.istockphoto.com/id/1304622701/vector/home-working-young-man-using-laptop-books-and-cat-on-desk.jpg?s=612x612&w=0&k=20&c=FaSsYW4dIBfKmg0jOnKSsVrdZbN0gdqH0uMCMzUaQGI=")',
                backgroundSize: '45% auto',
                backgroundPosition: 'right center',
            }}
        >
            {/* Content Section */}
            <div className="relative z-10 flex flex-col justify-center items-center w-[50%] h-full px-8">
                <div className="w-full text-center">
                    <span className="px-4 py-2 text-lg font-medium text-[#FF6600] bg-white bg-opacity-90 rounded-full shadow-lg">
                        Elevating Your Job Search
                    </span>
                    <h1
                        className="mt-6 text-5xl font-light leading-tight text-center"
                        style={{
                            fontFamily: '"Cormorant Garamond", serif',
                            color: '#000B58',
                            fontWeight: '1000',
                            fontSize: '45px',
                        }}
                    >
                        TURNING ASPIRATIONS INTO ACHIEVEMENTS <br />
                        <span
                            style={{
                                fontFamily: '"Satisfy", cursive',
                                fontWeight: '400',
                                fontStyle: 'normal',
                                color: '#FF6600',
                            }}
                        >
                            Job by Job!
                        </span>
                    </h1>
                </div>
                <div className="flex w-[90%] mt-8 border border-gray-300 pl-3 rounded-full items-center gap-4 bg-white bg-opacity-90 shadow-lg">
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full bg-transparent text-black placeholder-[#000B58]"
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
