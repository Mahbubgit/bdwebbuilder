import React from 'react';

const OrderItems = ({ orderItems, setDevelopment }) => {
    const { name, slots } = orderItems;
    return (
        <div  className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div  className="card-body justify-center items-center">
                <h2  className="card-title text-bold text-2xl text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another date.</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'orders' : 'order'} available</p>
                <div  className="card-actions">
                    <label
                        htmlFor="order-modal"
                        disabled={slots.length === 0}
                        onClick={() => setDevelopment(orderItems)}
                         className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary"
                         >Order Now</label>
                </div>
            </div>
        </div>
    );
};

export default OrderItems;
