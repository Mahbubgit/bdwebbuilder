import React from 'react';
import OrderNow from '../../img/order.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const OrderBanner = ({ date, setDate }) => {
    return (
        <div  className="hero">
            <div  className="hero-content flex-col lg:flex-row-reverse">
                <img src={OrderNow}  className="max-w-sm rounded-lg" alt='Order Now' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;