import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
// import logo from '../../img/logo/logo.png';
// import logo from '../../img/logo/logo1.png';
// import logo from '../../img/logo/logo2.png';
// import logo from '../../img/logo/logo3.png';
// import logo from '../../img/logo/logo4.png';
// import logo from '../../img/logo/logo5.png';
// import logo from '../../img/logo/logo6.png';
// import logo from '../../img/logo/logo7.png';
// import logo from '../../img/logo/logo8.png';
// import logo from '../../img/logo/logo9.png';
import logo from '../../img/logo/logo10.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {

    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
    };

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/order">Order</Link></li>
        <li><Link to="/orderStatus">Order Status</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }
        <li>{user
            ?
            <button className="btn btn-ghost" onClick={logout}>Sign Out</button>
            :
            <Link to="/login">Login</Link>}</li>
    </>

    return (
        <div className="navbar">
            <div className="navbar-start sm:flex md:flex lg:flex">
                <div className="dropdown">
                    <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 text-grey rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <img className="lg:w-1/3 md:w-1/4 sm:w-1/5" src={logo} alt="" />
                <span className='text-gray-600 ms-2 sm:text-xs text-sm'>{format(new Date(), 'PP')}</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label htmlFor="dashboard-sidebar" tabIndex="1" role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;