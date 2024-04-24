import React from 'react';

const Pricing = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
            {/* <ul className="steps steps-horizontal">
                <li className="step step-primary">Sign Up</li>
                <li className="step step-primary">Choose Plan</li>
                <li className="step step-primary">Buy Product</li>
                <li className="step step-primary">Receive</li>
                <li className="step step-primary">Enjoy</li>
            </ul> */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title bg-gray-100 w-full justify-between p-2 lg:font-extrabold md:font-bold sm:font-semibold">
                        <span>Basic</span>
                        <span><sup>TK</sup>5000<span> / year</span></span>
                    </h2>
                    <ul>
                        <li><span className='text-red-700 pr-2'>*</span>1-3 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 3 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>2 times free update per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 2 updates per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>3-5 days development time</li>
                        <li><span className='text-red-700 pr-2'>*</span>24/7 Support System</li>
                    </ul>
                </div>
                <div className="card-actions justify-center m-4">
                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Choose Plan</a>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title w-full justify-between p-2 text-white bg-gradient-to-r from-primary to-secondary lg:font-extrabold md:font-bold sm:font-semibold">
                        <span>Regular</span>
                        <span><sup>TK</sup>10000<span> / year</span></span>
                    </h2>
                    <ul>
                        <li><span className='text-red-700 pr-2'>*</span>3-5 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 5 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>2 times free update per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 2 updates per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>7-10 days development time</li>
                        <li><span className='text-red-700 pr-2'>*</span>24/7 Support System</li>
                    </ul>
                </div>
                <div className="card-actions justify-center m-4">
                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Choose Plan</a>
                </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body items-center">
                    <h2 className="card-title bg-gray-100 w-full justify-between p-2 lg:font-extrabold md:font-bold sm:font-semibold">
                        <span>Premium</span>
                        <span><sup>TK</sup>20000<span> / year</span></span>
                    </h2>
                    <ul>
                        <li><span className='text-red-700 pr-2'>*</span>7-10 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 10 pages</li>
                        <li><span className='text-red-700 pr-2'>*</span>3 times free update per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>Charge applicable for more than 3 updates per year</li>
                        <li><span className='text-red-700 pr-2'>*</span>15-20 days development time</li>
                        <li><span className='text-red-700 pr-2'>*</span>24/7 Support System</li>
                    </ul>
                </div>
                <div className="card-actions justify-center m-4">
                    <a className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary" href='order'>Choose Plan</a>
                </div>
            </div>
        </div>
    );
};

export default Pricing;