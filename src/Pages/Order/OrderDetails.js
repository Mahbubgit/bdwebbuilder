import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import OrderItems from './OrderItems';
import OrderModal from './OrderModal';

const OrderDetails = ({date}) => {
    const [orders, setOrders] = useState([]);
    const [development, setDevelopment] = useState(null);

    useEffect( () =>{
        fetch('http://localhost:5000/order')
        .then(res => res.json())
        .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <h4 className='text-xl lg:text-2xl font-bold text-accent text-center my-10'>Order Generated on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    orders.map(orderItems=><OrderItems
                    key={orderItems._id}
                    orderItems={orderItems}
                    setDevelopment={setDevelopment}
                    ></OrderItems>)
                }
            </div>
            {development && <OrderModal 
            date={date} 
            development={development}
            setDevelopment={setDevelopment}
            ></OrderModal>}
        </div>
    );
};

export default OrderDetails;