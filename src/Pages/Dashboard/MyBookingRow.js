import React from 'react';

const MyBookingRow = ({ booking, index, setDeleteBooking }) => {
    const { _id, clientName, serviceName, date, slot } = booking;
    return (
        <tr className='hover'>
            <th>{index + 1}</th>
            <td>{clientName}</td>
            <td>{serviceName}</td>
            <td>{date}</td>
            <td>{slot}</td>
            <td>
                <label onClick={() => setDeleteBooking(_id)} htmlFor="delete-booking-modal" className="btn btn-outline btn-sm">Delete</label>
            </td>
        </tr>
    );
};

export default MyBookingRow;