import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import useLoginUser from '../../hooks/useLoginUser';

const OrderModal = ({ development, date, setDevelopment, refetch }) => {
    const { _id, name, slots, plan } = development;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const [loginUserData] = useLoginUser(user);

    const handleOrder = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const planName = event.target.plan.value;
        // console.log(_id, name, slot);

        const booking = {
            serviceId: _id,
            serviceName: name,
            date: formattedDate,
            slot,
            planName,
            clientName: user.displayName,
            clientEmail: user.email,
            companyName: event.target.companyName.value,
            designation: event.target.designation.value,
            location: event.target.location.value,
            phone: event.target.phone.value,
            status: 'Pending'
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Booking is completed at ${formattedDate}, ${slot}`);
                }
                else {
                    toast.error(`You already have booking on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                //to close modal
                setDevelopment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Order for: {name}</h3>
                    <form onSubmit={handleOrder} className='grid grid-cols-1 gap-2 justify-items-center mt-2'>
                        <input type="text" disabled value={format(date, 'PP')} className="input w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <select name='plan' className="select select-bordered w-full max-w-xs">
                            {
                                plan.map((planItem, index) => <option
                                    key={index}
                                    value={planItem}
                                >{planItem}</option>)
                            }
                        </select>

                        <input type="text" name="name" disabled value={loginUserData?.name} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="companyName" value={loginUserData?.company} placeholder="Company Name" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="designation" value={loginUserData?.designation} placeholder="Designation" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="location" value={loginUserData?.address} placeholder="Location" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" value={loginUserData?.mobile} maxLength={11} placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" className="btn btn-sm text-white font-bold bg-gradient-to-r from-primary to-secondary max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;