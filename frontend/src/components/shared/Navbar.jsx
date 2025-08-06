import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { Avatar, AvatarImage } from '../ui/avatar'
import { LogOut, User2, LayoutDashboard, Building, Briefcase } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setUser } from '@/redux/authSlice'
import { toast } from 'sonner'
import { ThemeToggle } from '../theme-toggle'

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }
    return (
        <div className='bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 sticky top-0 z-50'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-4'>
                <div>
                    <Link to="/" className='text-2xl font-bold text-foreground hover:text-primary transition-colors'>
                        Job<span className='text-primary'>Seee</span>
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex font-medium items-center gap-6'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/recruiter/dashboard" className='text-muted-foreground hover:text-foreground transition-colors'>Dashboard</Link></li>
                                    <li><Link to="/admin/companies" className='text-muted-foreground hover:text-foreground transition-colors'>Companies</Link></li>
                                    <li><Link to="/admin/jobs" className='text-muted-foreground hover:text-foreground transition-colors'>Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className='text-muted-foreground hover:text-foreground transition-colors'>Home</Link></li>
                                    <li><Link to="/jobs" className='text-muted-foreground hover:text-foreground transition-colors'>Jobs</Link></li>
                                    <li><Link to="/browse" className='text-muted-foreground hover:text-foreground transition-colors'>Browse</Link></li>
                                    {user && user.role === 'student' && (
                                        <li><Link to="/student/dashboard" className='text-muted-foreground hover:text-foreground transition-colors'>Dashboard</Link></li>
                                    )}
                                </>
                            )
                        }


                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-3'>
                                <ThemeToggle />
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button>Signup</Button></Link>
                            </div>
                        ) : (
                            <div className='flex items-center gap-3'>
                                <ThemeToggle />
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Avatar className="cursor-pointer h-8 w-8">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80">
                                        <div className='p-2'>
                                            <div className='flex gap-3 items-center mb-4'>
                                                <Avatar className="h-12 w-12">
                                                    <AvatarImage src={user?.profile?.profilePhoto} alt={user?.fullname} />
                                                </Avatar>
                                                <div>
                                                    <h4 className='font-medium text-foreground'>{user?.fullname}</h4>
                                                    <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
                                                </div>
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                {
                                                    user && user.role === 'student' && (
                                                        <>
                                                            <Button variant="ghost" className='w-full justify-start' asChild>
                                                                <Link to="/student/dashboard">
                                                                    <LayoutDashboard className='mr-2 h-4 w-4' />
                                                                    Dashboard
                                                                </Link>
                                                            </Button>
                                                            <Button variant="ghost" className='w-full justify-start' asChild>
                                                                <Link to="/profile">
                                                                    <User2 className='mr-2 h-4 w-4' />
                                                                    View Profile
                                                                </Link>
                                                            </Button>
                                                        </>
                                                    )
                                                }
                                                {
                                                    user && user.role === 'recruiter' && (
                                                        <>
                                                            <Button variant="ghost" className='w-full justify-start' asChild>
                                                                <Link to="/recruiter/dashboard">
                                                                    <LayoutDashboard className='mr-2 h-4 w-4' />
                                                                    Dashboard
                                                                </Link>
                                                            </Button>
                                                            <Button variant="ghost" className='w-full justify-start' asChild>
                                                                <Link to="/admin/companies">
                                                                    <Building className='mr-2 h-4 w-4' />
                                                                    My Companies
                                                                </Link>
                                                            </Button>
                                                            <Button variant="ghost" className='w-full justify-start' asChild>
                                                                <Link to="/admin/jobs">
                                                                    <Briefcase className='mr-2 h-4 w-4' />
                                                                    My Jobs
                                                                </Link>
                                                            </Button>
                                                        </>
                                                    )
                                                }
                                                <Button variant="ghost" className='w-full justify-start text-destructive hover:text-destructive' onClick={logoutHandler}>
                                                    <LogOut className='mr-2 h-4 w-4' />
                                                    Logout
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    )
}

export default Navbar