import React from 'react';
import { format } from 'date-fns';

const OrderModal = ({ development, date, setDevelopment }) => {
    const { _id, name, slots } = development;

    const handleOrder = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name, slot);
        
        //to close modal
        setDevelopment(null);
    }
    return (
        <div>
            <input type="checkbox" id="order-modal"  className="modal-toggle" />
            <div  className="modal" role="dialog">
                <div  className="modal-box">
                    <label htmlFor="order-modal"  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3  className="font-bold text-lg text-center text-secondary">Order for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')}  className="input w-full max-w-xs" />
                        <select name='slot'  className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot =><option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name"  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="companyName" placeholder="Company Name"  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="designation" placeholder="Designation"  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="location" placeholder="Location"  className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" placeholder="Email Address"  className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number"  className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit"  className="btn text-white font-bold bg-gradient-to-r from-primary to-secondary max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;