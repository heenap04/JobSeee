import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { User, Briefcase, Search, MapPin } from 'lucide-react'
import Navbar from '../shared/Navbar'
import { useNavigate } from 'react-router-dom'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs'

const StudentDashboard = () => {
    useGetAllJobs()
    useGetAppliedJobs()
    const { user } = useSelector(store => store.auth)
    const { allJobs, allAppliedJobs } = useSelector(store => store.job)
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            <div className="max-w-7xl mx-auto p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Student Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, {user?.fullname}!</p>
                    </div>
                    <Button onClick={() => navigate('/profile')} variant="outline">
                        <User className="h-4 w-4 mr-2" />
                        Edit Profile
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Available Jobs</p>
                                <p className="text-2xl font-bold">{allJobs?.length || 0}</p>
                            </div>
                            <Briefcase className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Applications</p>
                                <p className="text-2xl font-bold">{allAppliedJobs?.length || 0}</p>
                            </div>
                            <Search className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                    
                    <div className="bg-card p-6 rounded-lg border">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">Profile Views</p>
                                <p className="text-2xl font-bold">0</p>
                            </div>
                            <User className="h-8 w-8 text-primary" />
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-card p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button onClick={() => navigate('/jobs')} className="h-20 flex-col">
                            <Search className="h-6 w-6 mb-2" />
                            Browse Jobs
                        </Button>
                        <Button onClick={() => navigate('/profile')} variant="outline" className="h-20 flex-col">
                            <User className="h-6 w-6 mb-2" />
                            Update Profile
                        </Button>
                        <Button onClick={() => navigate('/browse')} variant="outline" className="h-20 flex-col">
                            <Briefcase className="h-6 w-6 mb-2" />
                            Search Companies
                        </Button>
                    </div>
                </div>

                {/* Recent Jobs */}
                <div className="bg-card p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Recent Job Postings</h2>
                    <div className="space-y-4">
                        {allJobs?.slice(0, 3).map((job) => (
                            <div key={job._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-semibold">{job.title}</h3>
                                        <p className="text-muted-foreground">{job.company?.name}</p>
                                    </div>
                                    <Badge variant="secondary">{job.jobType}</Badge>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                    <span className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        {job.location}
                                    </span>
                                    <span>₹{job.salary}</span>
                                </div>
                                <Button 
                                    size="sm"
                                    onClick={() => navigate(`/description/${job._id}`)}
                                >
                                    View Details
                                </Button>
                            </div>
                        )) || (
                            <p className="text-muted-foreground text-center py-8">
                                No jobs available at the moment. Check back later!
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDashboard
