import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleToHomePage = () => {
        navigate('/');
    }

    return (
        <div className="flex items-center justify-center py-12">
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-900 rounded-md flex items-center justify-center mx-4 md:w-2/3">
                <div className="flex flex-col items-center py-16">
                    <img className="px-4 hidden md:block" src='https://i.ibb.co/9Vs73RF/undraw-page-not-found-su7k-1-3.png' alt='' />
                    <img className="md:hidden" src='https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png' alt='' />
                    <h1 className="px-4 pt-8 pb-4 text-center dark:text-white text-5xl font-bold leading-10 text-accent">দুঃখিত!</h1>
                    <p className="px-4 pb-10 text-3xl leading-none dark:text-gray-200 text-center text-error">আপনি যে পৃষ্ঠাটি খুঁজছেন তা আমরা খুঁজে পাচ্ছি না।</p>
                    <button onClick={() => handleToHomePage()} className="mx-4 h-10 w-44  rounded-md text-white text-base bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default NotFound; <h2>This is Not Found.</h2>