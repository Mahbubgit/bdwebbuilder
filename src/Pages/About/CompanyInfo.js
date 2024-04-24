import React from 'react';

const CompanyInfo = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" alt='Company' />
                <div>
                    <h2 className="sm:text-xl md:text-2xl lg:text-4xl text-accent my-3 font-bold">Why We Are The Best?</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <a className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfo;