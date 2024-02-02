import React, { useEffect, useState } from 'react';

const OrderStatus = () => {
    const [bookingStatus, setBookingStatus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setBookingStatus(data));
    }, [])

    return (
        // const booking = {
        //     orderId: _id,
        //     orderName: name,
        //     date: formattedDate,
        //     slot,
        //     clientName: user.displayName,
        //     clientEmail: user.email,
        //     companyName: event.target.companyName.value,
        //     designation: event.target.designation.value,
        //     location: event.target.location.value,
        //     phone: event.target.phone.value,
        //     status: 'Pending'
        // }
        <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                    <tr className='bg-gray-500 text-white'>
                        <td>Sl No</td>
                        {/* clientName */}
                        <td>Name</td> 
                        {/* clientEmail */}
                        <td>User</td> 
                        {/* companyName */}
                        <td>Company</td>
                        <td>Designation</td>
                        <td>Location</td>
                        {/* orderName */}
                        <td>Order</td>
                        {/* date */}
                        <td>Order Date</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingStatus.map((bookingItems, index) =>

                            <>
                                <tr className=''>
                                    <td>{bookingItems.key = index+1}</td>
                                    <td>{bookingItems.clientName}</td>
                                    <td>{bookingItems.clientEmail}</td>
                                    <td>{bookingItems.companyName}</td>
                                    <td>{bookingItems.designation}</td>
                                    <td>{bookingItems.location}</td>
                                    <td>{bookingItems.orderName}</td>
                                    <td>{bookingItems.date}</td>
                                    <td>{bookingItems.status}</td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
                <tfoot>
                <tr className='bg-gray-500 text-white'>
                        <td>Sl No</td>
                        <td>Name</td>
                        <td>User</td> 
                        <td>Company</td>
                        <td>Designation</td>
                        <td>Location</td>
                        <td>Order</td>
                        <td>Order Date</td>
                        <td>Status</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default OrderStatus;