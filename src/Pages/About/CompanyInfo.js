import React from 'react';
import WhyChooseUs from '../../img/Why-Choose-Us.png';
const CompanyInfo = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={WhyChooseUs} className="lg:max-w-sm rounded-lg shadow-2xl" alt='Company' />
                <div>
                    <h2 className="sm:text-xs md:text-2xl lg:text-4xl text-primary my-3 font-bold">Why Choose Us For Your Business Website?</h2>
                    <p className="py-6 text-justify">
                        We are not ordinary web development agency. We create experiences that are more engaging, easier to use, and more productive for your business. We will create a professional business website for you that will grow your business incredibly.</p>
                    <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;