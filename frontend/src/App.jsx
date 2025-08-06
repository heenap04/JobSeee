import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/admin/Companies'
import CompanyCreate from './components/admin/CompanyCreate'
import CompanySetup from './components/admin/CompanySetup'
import AdminJobs from "./components/admin/AdminJobs";
import PostJob from './components/admin/PostJob'
import Applicants from './components/admin/Applicants'
import ProtectedRoute from './components/admin/ProtectedRoute'
import StudentDashboard from './components/student/StudentDashboard'
import RecruiterDashboard from './components/recruiter/RecruiterDashboard'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: "/jobs",
    element: <Jobs />
  },
  {
    path: "/description/:id",
    element: <JobDescription />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/profile",
    element: <ProtectedRoute allowedRoles={['student', 'recruiter']}><Profile /></ProtectedRoute>
  },
  {
    path: "/student/dashboard",
    element: <ProtectedRoute allowedRoles={['student']}><StudentDashboard /></ProtectedRoute>
  },
  {
    path: "/recruiter/dashboard",
    element: <ProtectedRoute allowedRoles={['recruiter']}><RecruiterDashboard /></ProtectedRoute>
  },
  // Recruiter/Admin routes
  {
    path: "/admin/companies",
    element: <ProtectedRoute allowedRoles={['recruiter']}><Companies/></ProtectedRoute>
  },
  {
    path: "/admin/companies/create",
    element: <ProtectedRoute allowedRoles={['recruiter']}><CompanyCreate/></ProtectedRoute> 
  },
  {
    path: "/admin/companies/:id",
    element: <ProtectedRoute allowedRoles={['recruiter']}><CompanySetup/></ProtectedRoute> 
  },
  {
    path: "/admin/jobs",
    element: <ProtectedRoute allowedRoles={['recruiter']}><AdminJobs/></ProtectedRoute> 
  },
  {
    path: "/admin/jobs/create",
    element: <ProtectedRoute allowedRoles={['recruiter']}><PostJob/></ProtectedRoute> 
  },
  {
    path: "/admin/jobs/:id/applicants",
    element: <ProtectedRoute allowedRoles={['recruiter']}><Applicants/></ProtectedRoute> 
  },
  // Add a catch-all route for 404
  {
    path: "*",
    element: <div>404 - Page Not Found</div>
  }
])

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
