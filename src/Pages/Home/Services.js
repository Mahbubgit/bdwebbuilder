import React, { useEffect, useState } from 'react';
import services1 from '../../img/services/services1.jpg';
import Service from './Service';
import Button from '../Shared/Button';
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div className='my-10  '>
            <div className='text-center p-2'>
                <h3 className='text-primary text-xl lg:text-2xl font-bold'>Our Services</h3>
                <h2 className='text-2xl lg:text-4xl'>Services We Provide</h2>
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
                        <h3 className="text-3xl font-bold">We are here to help Your Online Business!</h3>
                        <p className="py-6">We can develop a beautiful Professional Website to promote your online business.</p>
                        <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;