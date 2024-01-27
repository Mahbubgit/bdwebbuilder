import React, { useEffect, useState } from 'react';

const OrderStatus = () => {
    const [orderStatus, setOrderStatus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orderStatus')
            .then(res => res.json())
            .then(data => setOrderStatus(data));
    }, [])

    return (
        <div className="overflow-x-auto">
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Company</td>
                        <td>Designation</td>
                        <td>Location</td>
                        <td>Order</td>
                        <td>Order Date</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderStatus.map(orderItems =>
                            <>
                                <tr>
                                    <td>{orderItems.name}</td>
                                    <td>{orderItems.company}</td>
                                    <td>{orderItems.designation}</td>
                                    <td>{orderItems.location}</td>
                                    <td>{orderItems.order}</td>
                                    <td>{orderItems.orderDate}</td>
                                    <td>{orderItems.status}</td>
                                </tr>
                            </>
                        )
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td>Name</td>
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