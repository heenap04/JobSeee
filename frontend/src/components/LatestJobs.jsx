// import React from 'react'
// import LatestJobCards from './LatestJobCards';
// import { useSelector } from 'react-redux'; 

// // const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

// const LatestJobs = () => {
//     const {allJobs} = useSelector(store=>store.job);
   
//     return (
//         <div className='max-w-7xl mx-auto my-20'>
//             <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
//             <div className='grid grid-cols-3 gap-4 my-5'>
//                 {
//                     allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
//                 }
//             </div>
//         </div>
//     )
// }

// export default LatestJobs

import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';

const LatestJobs = () => {
    const { allJobs } = useSelector((store) => store.job);

    return (
        <div className='max-w-7xl mx-auto my-20 px-4'>
            <h1 className='text-4xl font-extrabold text-center text-[#FF8C00] mb-8'>
                <span className='text-gradient'>Latest & Top </span>Job Openings
            </h1>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    allJobs.length <= 0 
                        ? <span className='text-xl text-center text-gray-600'>No Job Available</span>
                        : allJobs?.slice(0, 6).map((job) => (
                            <div key={job._id} className='transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'>
                                <LatestJobCards key={job._id} job={job} />
                            </div>
                        ))
                }
            </div>
        </div>
    );
}

export default LatestJobs;
