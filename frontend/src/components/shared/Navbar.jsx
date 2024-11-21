// import React from 'react'
// import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
// import { Button } from '../ui/button'
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { LogOut, User2 } from 'lucide-react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import axios from 'axios'
// import { USER_API_END_POINT } from '@/utils/constant'
// import { setUser } from '@/redux/authSlice'
// import { toast } from 'sonner'

// const Navbar = () => {
//     const { user } = useSelector(store => store.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const logoutHandler = async () => {
//         try {
//             const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
//             if (res.data.success) {
//                 dispatch(setUser(null));
//                 navigate("/");
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error(error.response.data.message);
//         }
//     }
//     return (
//         <div className='bg-white'>
//             <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
//                 <div>
//                     <h1 className='text-2xl font-bold'>Job<span className='text-[#F83002]'>Seee</span></h1>
//                 </div>
//                 <div className='flex items-center gap-12'>
//                     <ul className='flex font-medium items-center gap-5'>
//                         {
//                             user && user.role === 'recruiter' ? (
//                                 <>
//                                     <li><Link to="/admin/companies">Companies</Link></li>
//                                     <li><Link to="/admin/jobs">Jobs</Link></li>
//                                 </>
//                             ) : (
//                                 <>
//                                     <li><Link to="/">Home</Link></li>
//                                     <li><Link to="/jobs">Jobs</Link></li>
//                                     <li><Link to="/browse">Browse</Link></li>
//                                 </>
//                             )
//                         }


//                     </ul>
//                     {
//                         !user ? (
//                             <div className='flex items-center gap-2'>
//                                 <Link to="/login"><Button variant="outline">Login</Button></Link>
//                                 <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">Signup</Button></Link>
//                             </div>
//                         ) : (
//                             <Popover>
//                                 <PopoverTrigger asChild>
//                                     <Avatar className="cursor-pointer">
//                                         <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                     </Avatar>
//                                 </PopoverTrigger>
//                                 <PopoverContent className="w-80">
//                                     <div className=''>
//                                         <div className='flex gap-2 space-y-2'>
//                                             <Avatar className="cursor-pointer">
//                                                 <AvatarImage src={user?.profile?.profilePhoto} alt="@shadcn" />
//                                             </Avatar>
//                                             <div>
//                                                 <h4 className='font-medium'>{user?.fullname}</h4>
//                                                 <p className='text-sm text-muted-foreground'>{user?.profile?.bio}</p>
//                                             </div>
//                                         </div>
//                                         <div className='flex flex-col my-2 text-gray-600'>
//                                             {
//                                                 user && user.role === 'student' && (
//                                                     <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                         <User2 />
//                                                         <Button variant="link"> <Link to="/profile">View Profile</Link></Button>
//                                                     </div>
//                                                 )
//                                             }

//                                             <div className='flex w-fit items-center gap-2 cursor-pointer'>
//                                                 <LogOut />
//                                                 <Button onClick={logoutHandler} variant="link">Logout</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </PopoverContent>
//                             </Popover>
//                         )
//                     }

//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar

import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

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
        // <div className='bg-gradient-to-r from-gray-100 to-gray-200 shadow-md'>
        <div className='bg-color-[#faf5ed]'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>
                {/* Logo/Brand */}
                <div>
                    <h1 className='text-3xl font-bold text-[#FF8C00]'>
                        Job<span className='text-[#FF8C00]'>Seee</span>
                    </h1>
                </div>
                
                {/* Navigation Links */}
                <div className='flex items-center gap-10'>
                    <ul className='flex font-medium items-center gap-8'>
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies" className="text-[#FF8C00] hover:text-[#FFA500] transition-all">Companies</Link></li>
                                    <li><Link to="/admin/jobs" className="text-[#FF8C00] hover:text-[#FFA500] transition-all">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="text-[#FF8C00] hover:text-[#FFA500] transition-all">Home</Link></li>
                                    <li><Link to="/jobs" className="text-[#FF8C00] hover:text-[#FFA500] transition-all">Jobs</Link></li>
                                    <li><Link to="/browse" className="text-[#FF8C00] hover:text-[#FFA500] transition-all">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>

                    {/* User Actions (Login/Signup/Profile) */}
                    {
                        !user ? (
                            <div className='flex items-center gap-4'>
                                <Link to="/login">
                                    <Button variant="outline" className="text-[#FF8C00] hover:bg-[#FF8C00] hover:text-white transition-all">Login</Button>
                                </Link>
                                <Link to="/signup">
                                    <Button className="bg-[#FF8C00] hover:bg-[#D97700] text-white transition-all">Signup</Button>
                                </Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto} alt="user-profile" className="rounded-full border-2 border-[#FF8C00]" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80 bg-white shadow-lg rounded-md border border-[#FF8C00]">
                                    <div className='p-4'>
                                        {/* User Information */}
                                        <div className='flex gap-2 items-center'>
                                            <Avatar className="cursor-pointer">
                                                <AvatarImage src={user?.profile?.profilePhoto} alt="user-profile" />
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium text-[#FF8C00]'>{user?.fullname}</h4>
                                                <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-4 text-gray-600'>
                                            {
                                                user && user.role === 'student' && (
                                                    <div className='flex items-center gap-2 cursor-pointer'>
                                                        <User2 />
                                                        <Button variant="link">
                                                            <Link to="/profile" className="text-[#FF8C00]">View Profile</Link>
                                                        </Button>
                                                    </div>
                                                )
                                            }
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button onClick={logoutHandler} variant="link" className="text-[#FF8C00]">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Navbar;
