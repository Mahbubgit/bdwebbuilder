import React from 'react';
import { toast } from 'react-toastify';

const AllBookingsRow = ({ booking, index, refetch }) => {
    const { _id, role, clientName,  companyName, serviceName, date, slot, status } = booking;

    const btnAccepted = () => {
        fetch(`http://localhost:5000/bookingUpdate/${_id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log('Updated Data: ', data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully accepted request.`);
                    // setBookings(null);
                }
                else {
                    toast.error('Your action request is failed.');
                }
            })
    }

    const btnCanceled = () => {
        fetch(`http://localhost:5000/bookingCancel/${_id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Request is canceled.`);
                    // setBookings(null);
                }
                else {
                    toast.error('Your action request is failed.');
                }
            })
    }
    
    const btnFinished = () => {
        fetch(`http://localhost:5000/bookingFinish/${_id}`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Request is finished.`);
                }
                else {
                    toast.error('Your action request is failed.');
                }
            })
    }

    return (
        <tr className='hover text-xs' key={index}>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{companyName}</td>
            <td>{serviceName}</td>
            <td>{date}: {slot}</td>
            <td>{status}</td>
            <td className='flex gap-1'>
                {booking?.role}
                {role !== 'admin' && status === 'Pending' && <button onClick={btnAccepted} className="btn btn-sm btn-primary">Accepted</button>}
                {role !== 'admin' && status !== 'Canceled' && status !== 'Finished' && <button onClick={btnCanceled} className="btn btn-sm btn-accent text-white">Canceled</button>}
                {role !== 'admin' && status !== 'Canceled' && status !== 'Pending' && status !== 'Finished' && <button onClick={btnFinished}  className="btn btn-sm btn-secondary">Finished</button>}
            </td>
        </tr>
    );
};

export default AllBookingsRow;