// import React, { useEffect } from 'react'
// import Navbar from './shared/Navbar'
// import HeroSection from './HeroSection'
// import CategoryCarousel from './CategoryCarousel'
// import LatestJobs from './LatestJobs'
// import Footer from './shared/Footer'
// import useGetAllJobs from '@/hooks/useGetAllJobs'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const Home = () => {
//   useGetAllJobs();
//   const { user } = useSelector(store => store.auth);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (user?.role === 'recruiter') {
//       navigate("/admin/companies");
//     }
//   }, []);
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <CategoryCarousel />
//       <LatestJobs />
//       <Footer />
//     </div>
//   )
// }

// export default Home


import React, { useEffect } from 'react';
import Navbar from './shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './shared/Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate('/admin/companies');
    }
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <HeroSection />
      <div className="container mx-auto px-4">
        <CategoryCarousel />
        <LatestJobs />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
