import React from 'react';
import WhyChooseUs from '../../img/Why-Choose-Us.png';
const CompanyInfo = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={WhyChooseUs} className="lg:max-w-sm rounded-lg shadow-2xl" alt='Company' />
                <div>
                    <h2 className="sm:text-xs md:text-2xl lg:text-4xl text-primary my-3 font-bold">কেন আপনার ব্যবসায়িক ওয়েবসাইটের জন্য আমাদের বেছে নিবেন?</h2>
                    <p className="py-6 text-justify">
                        আমরা সাধারণ ওয়েব ডেভেলপমেন্ট এজেন্সি না. আমরা এমন গ্রাহক অভিজ্ঞতা তৈরি করি যা ব্যবসার জন্য আরও আকর্ষক, ব্যবহারে সহজ এবং আরও উৎপাদনশীল। আমরা আপনার জন্য একটি পেশাদার ব্যবসায়িক ওয়েবসাইট তৈরি করব যা আপনার ব্যবসাকে অবিশ্বাস্যভাবে বৃদ্ধি করবে।
                    </p>
                    <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;