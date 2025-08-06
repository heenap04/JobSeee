import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { 
    User, 
    Briefcase, 
    Users, 
    FileText, 
    Plus, 
    Eye, 
    Edit, 
    Building,
    MapPin,
    Calendar,
    DollarSign
} from 'lucide-react'
import Navbar from '../shared/Navbar'
import { useNavigate } from 'react-router-dom'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'

const RecruiterDashboard = () => {
    useGetAllAdminJobs()
    const { user } = useSelector(store => store.auth)
    const { allAdminJobs } = useSelector(store => store.job)
    const navigate = useNavigate()

    // Calculate stats
    const totalJobs = allAdminJobs?.length || 0;
    let totalApplications = 0;
    let uniqueCandidates = new Set();
    let activeJobs = 0;
    if (allAdminJobs && allAdminJobs.length > 0) {
        allAdminJobs.forEach(job => {
            if (Array.isArray(job.applications)) {
                totalApplications += job.applications.length;
                job.applications.forEach(app => {
                    if (app.applicant) uniqueCandidates.add(app.applicant.toString());
                });
            }
            // If job.status exists and is 'active', count as active. Otherwise, count all as active.
            if (!job.status || job.status === 'active') activeJobs++;
        });
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            
            <div className="max-w-7xl mx-auto p-6 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Recruiter Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, {user?.fullname}!</p>
                    </div>
                    <Button onClick={() => navigate('/admin/job/create')} className="bg-primary">
                        <Plus className="h-4 w-4 mr-2" />
                        Post New Job
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-muted-foreground">Total Jobs</p>
                            <div className="text-2xl font-bold">{totalJobs}</div>
                            <p className="text-xs text-muted-foreground">Jobs posted</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Applications</CardTitle>
                            <FileText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-muted-foreground">Applications</p>
                            <div className="text-2xl font-bold">{totalApplications}</div>
                            <p className="text-xs text-muted-foreground">Total applications</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Candidates</CardTitle>
                            <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-muted-foreground">Candidates</p>
                            <div className="text-2xl font-bold">{uniqueCandidates.size}</div>
                            <p className="text-xs text-muted-foreground">Unique applicants</p>
                        </CardContent>
                    </Card>
                    
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                            <Building className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                            <div className="text-2xl font-bold">{activeJobs}</div>
                            <p className="text-xs text-muted-foreground">Currently hiring</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Actions */}
                <div className="bg-card p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button onClick={() => navigate('/admin/job/create')} className="h-20 flex-col">
                            <Plus className="h-6 w-6 mb-2" />
                            Post New Job
                        </Button>
                        <Button onClick={() => navigate('/admin/jobs')} variant="outline" className="h-20 flex-col">
                            <Briefcase className="h-6 w-6 mb-2" />
                            Manage Jobs
                        </Button>
                        <Button onClick={() => navigate('/admin/companies')} variant="outline" className="h-20 flex-col">
                            <Building className="h-6 w-6 mb-2" />
                            Company Profile
                        </Button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-card p-6 rounded-lg border">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                    <div className="text-center py-8">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">No recent activity</p>
                        <p className="text-sm text-muted-foreground mt-2">
                            Start by posting your first job to see applications and candidate activity here.
                        </p>
                        <Button 
                            onClick={() => navigate('/admin/job/create')} 
                            className="mt-4"
                        >
                            Post Your First Job
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecruiterDashboard
