import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
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
        <div className='relative min-h-[80vh] flex items-center justify-center'>
            {/* Background gradient */}
            <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10' />
            <div className='absolute inset-0 bg-grid-pattern opacity-5' />
            
            <div className='relative z-10 text-center max-w-4xl mx-auto px-4'>
                <div className='flex flex-col gap-8'>
                    {/* Badge */}
                    <div className='mx-auto'>
                        <span className='inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 backdrop-blur-sm'>
                            ✨ Elevating Your Job Search
                        </span>
                    </div>
                    
                    {/* Main heading */}
                    <div className='space-y-4'>
                        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
                            <span className='bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent'>
                                TURNING ASPIRATIONS INTO
                            </span>
                            <br />
                            <span className='bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
                                ACHIEVEMENTS
                            </span>
                        </h1>
                        <p className='text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
                            Unleashing your potential with every opportunity – because the career you dream of is just a step away!
                        </p>
                    </div>
                    
                    {/* Search bar */}
                    <div className='flex flex-col sm:flex-row w-full max-w-2xl mx-auto'>
                        <div className='relative flex-1'>
                            <input
                                type="text"
                                placeholder='Find your dream jobs...'
                                onChange={(e) => setQuery(e.target.value)}
                                className='w-full h-14 px-6 pr-4 bg-background/80 backdrop-blur-sm border border-border/50 rounded-l-full sm:rounded-r-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-muted-foreground'
                            />
                        </div>
                        <Button 
                            onClick={searchJobHandler} 
                            className="h-14 px-8 rounded-r-full sm:rounded-l-none rounded-l-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <Search className='h-5 w-5 mr-2' />
                            Search Jobs
                        </Button>
                    </div>
                    
                    {/* Stats or features */}
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-center'>
                        <div className='p-4'>
                            <div className='text-2xl font-bold text-primary'>10K+</div>
                            <div className='text-sm text-muted-foreground'>Active Jobs</div>
                        </div>
                        <div className='p-4'>
                            <div className='text-2xl font-bold text-primary'>500+</div>
                            <div className='text-sm text-muted-foreground'>Companies</div>
                        </div>
                        <div className='p-4'>
                            <div className='text-2xl font-bold text-primary'>50K+</div>
                            <div className='text-sm text-muted-foreground'>Job Seekers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;