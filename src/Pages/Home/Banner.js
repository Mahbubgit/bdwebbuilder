import React from 'react';
import HeroPic from '../../img/hero-bg.jpg';

const Banner = () => {
    return (
        <div className="hero place-items-start  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroPic} className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold">Welcome to BDWebBuilder!</h1>
                    <p className="py-6">We offer best solutions for growing your business.
                        We are team of talented developers making websites to help you.</p>
                    <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;