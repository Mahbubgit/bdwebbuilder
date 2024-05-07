import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='lg:text-3xl md:text-2xl sm:text-xl font-bold text-green-500 text-center'>Welcome {user?.displayName} to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 min-h-full text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={"/dashboard"}>My Bookings</Link></li>
                    <li><Link to={"/dashboard/myBookingHistory"}>My Booking History</Link></li>
                    <li><Link to={"/dashboard/myReview"}>My Review</Link></li>
                    <li><Link to={"/dashboard/myProfile"}>My Profile</Link></li>
                    {admin &&
                        <>
                            <li><Link to={"/dashboard/contactMessage"}>Contact Message</Link></li>
                            <li><Link to={"/dashboard/addBlog"}>Add a Blog</Link></li>
                            <li><Link to={"/dashboard/addPortfolio"}>Add Portfolio</Link></li>
                            <li><Link to={"/dashboard/allBookings"}>All Bookings</Link></li>
                            <li><Link to={"/dashboard/manageUsers"}>Manage Users</Link></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;