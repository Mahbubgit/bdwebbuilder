import React from 'react';
import HeroPic from '../../img/hero-bg.jpg';
import Button from '../Shared/Button';

const Banner = () => {
    return (
        // <div className="hero min-h-screen place-items-start  ">
        <div className="hero place-items-start  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={HeroPic} className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="sm:text-xl md:text-2xl lg:text-4xl font-bold">Welcome to BDWebBuilder!</h1>
                    <p className="py-6">We offer best solutions for growing your business.
                        We are team of talented developers making websites to help you.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;