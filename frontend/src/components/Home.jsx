import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="relative">
        <HeroSection />
        <div className="bg-gradient-to-b from-background to-muted/20">
          <CategoryCarousel />
          <LatestJobs />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home