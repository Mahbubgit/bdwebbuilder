import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-green-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 min-h-full text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={"/dashboard"}>My Bookings</Link></li>
                    <li><Link to={"/dashboard/myReview"}>My Review</Link></li>
                    <li><Link to={"/dashboard/myHistory"}>My Booking History</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;