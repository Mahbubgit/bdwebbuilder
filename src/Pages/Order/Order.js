import React, { useState } from 'react';
import OrderBanner from './OrderBanner';
import OrderDetails from './OrderDetails';

const Order = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
           <OrderBanner date={date} setDate={setDate}></OrderBanner>
           <OrderDetails date={date}></OrderDetails>
        </div>
    );
};

export default Order;