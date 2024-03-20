import React from 'react';

const OrderItems = ({ service, setDevelopment }) => {
    const { name, slots } = service;
    return (
        <div  className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div  className="card-body justify-center items-center">
                <h2  className="card-title sm:text-xs md:text-xl lg:text-2xl font-bold text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length > 1 ? slots.length + ' orders available' : (slots.length > 0 ? '1 order available' : ' ')}</p>
                <div  className="card-actions">
                    <label
                        htmlFor="order-modal"
                        disabled={slots.length === 0}
                        onClick={() => setDevelopment(service)}
                         className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary"
                         >Order Now</label>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;
