import React, { useEffect, useState } from 'react';
import services1 from '../../img/services/services1.jpg';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            <div className='text-center p-2'>
                <h3 className='text-primary text-xl lg:text-2xl font-bold'>আমাদের সেবাসমূহ</h3>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(
                        service => <Service
                            key={service._id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img src={services1} className="sm:max-w-sm md:max-w-xl lg:max-w-2xl rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h3 className="text-accent text-xl lg:text-3xl">এখানে আমরা ব্যবসায়িক বা উদ্যোক্তাদের অনলাইন ব্যবসায় সাহায্য করি</h3>
                        <p className="py-6 text-justify">আপনার অনলাইন ব্যবসার প্রচার, প্রসার এবং বিক্রয় বৃদ্ধির জন্য আমরা একটি সুন্দর পেশাদার ওয়েবসাইট তৈরি করতে পারি। আমাদের কোম্পানি ব্যবসায়িক বা উদ্যোক্তাদের সহায়তা করার জন্য ওয়েব ডেভেলপমেন্ট পরিষেবাগুলি দিয়ে থাকে। আমাদের পরিষেবাগুলির মধ্যে ওয়েবসাইটগুলির পরিকল্পনা, ডিজাইন, ডেভেলপ এবং রক্ষণাবেক্ষণ অন্তর্ভুক্ত।</p>
                        <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Order Now</a>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8'>
                <h2 className='text-accent text-xl lg:text-3xl'>আপনি কিভাবে একটি ওয়েবসাইট পাবেন?</h2>
                <ul className="steps steps-vertical lg:steps-horizontal mt-4">
                    <li className="step step-primary">Pricing মেনু থেকে প্ল্যান বেছে নিন</li>
                    <li className="step step-primary">সাইন আপ বা লগইন করুন</li>
                    <li className="step step-primary">প্রোফাইল তথ্য আপডেট করুন</li>
                    <li className="step step-primary">ওয়েবসাইট বা সার্ভিস অর্ডার করুন</li>
                    <li className="step step-primary">ফোনে আলোচনা করা হবে</li>
                    <li className="step step-primary">ওয়েবসাইট ডেভেলপ হবে</li>
                    <li className="step step-primary">ওয়েবসাইট ডেলিভারি হবে</li>
                    <li className="step step-primary">ওয়েবসাইট হোস্টিং হবে</li>
                    <li className="step step-primary">অনলাইন ব্যবসা উপভোগ করুন</li>
                    {/* <li className="step step-primary">Choose Plan in Pricing Menu</li>
                    <li className="step step-primary">Sign Up/Login</li>
                    <li className="step step-primary">Update Profile Information</li>
                    <li className="step step-primary">Order Your Website with Plan</li>
                    <li className="step step-primary">Discuss Before Development</li>
                    <li className="step step-primary">Development</li>
                    <li className="step step-primary">Delivery</li>
                    <li className="step step-primary">Hosting</li>
                    <li className="step step-primary">Enjoy Online Business</li> */}
                </ul>
            </div>
        </div>
    );
};

export default Services;