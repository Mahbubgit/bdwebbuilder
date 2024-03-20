import React, { useEffect, useState } from 'react';

const OrderStatus = () => {
    const [bookingStatus, setBookingStatus] = useState([]);
    useEffect(() => {
        fetch('https://nameless-shelf-67231-5f2c49be0d99.herokuapp.com/bookingStatus')
            .then(res => res.json())
            .then(data => setBookingStatus(data));
    }, [])

    return (
        // const booking = {
        //     serviceId: _id,
        //     serviceName: name,
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
                        {/* companyName */}
                        <td>Company</td>
                        <td>Designation</td>
                        <td>Location</td>
                        {/* orderName */}
                        <td>Service Name</td>
                        {/* date */}
                        <td>Order Date</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookingStatus.map((bookingItems, key) =>


                            <tr
                                className='hover'
                                key={key}
                            >
                                <td>{key + 1}</td>
                                <td>{bookingItems.clientName}/{bookingItems.clientEmail}</td>
                                <td>{bookingItems.companyName}</td>
                                <td>{bookingItems.designation}</td>
                                <td>{bookingItems.location}</td>
                                <td>{bookingItems.serviceName}</td>
                                <td>{bookingItems.date}</td>
                                <td>{bookingItems.status}</td>
                            </tr>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr className='bg-gray-500 text-white'>
                        <td>Sl No</td>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Designation</td>
                        <td>Location</td>
                        <td>Service Name</td>
                        <td>Order Date</td>
                        <td>Status</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default OrderStatus;