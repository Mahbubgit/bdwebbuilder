import React from 'react';
import HeroPic from '../../img/hero-bg.jpg';

const Banner = () => {
    return (
        <div className="hero place-items-start  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroPic} className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold">BDWebBuilder এ স্বাগতম!</h1>
                    <p className="py-6 text-justify">
                        আমরা আপনার ব্যবসা বাড়াতে সেরা সমাধান অফার করছি। আমাদের  প্রতিভাবান ওয়েবসাইট ডেভেলপার টীম আপনার ব্যবসাকে বিশ্বব্যাপী পরিচিত করতে ওয়েবসাইট তৈরি করে। এবং আপনার ব্যবসাকে অনলাইন ব্যবসায় পরিণত করে অগণিত ক্রেতার কাছে আপনার পণ্যকে পৌঁছে দেয়। আমরা আপনাকে আপনার স্বপ্নের ব্যবসা বাড়াতে সাহায্য করি।
                    </p>
                    <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;