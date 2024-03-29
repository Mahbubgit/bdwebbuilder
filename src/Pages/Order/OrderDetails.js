import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import OrderItems from './OrderItems';
import OrderModal from './OrderModal';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const OrderDetails = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [development, setDevelopment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: services, isLoading, refetch } =
        useQuery(['available',formattedDate],
            () => fetch(`https://nameless-shelf-67231-5f2c49be0d99.herokuapp.com/available?date=${formattedDate}`)
                .then(res => res.json())
        );

    if (isLoading) {
        return <Loading></Loading>
    }
    // fetch('https://nameless-shelf-67231-5f2c49be0d99.herokuapp.com/services')

    // useEffect(() => {
    //     fetch(`https://nameless-shelf-67231-5f2c49be0d99.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formattedDate]);

    return (
        <div className='my-10'>
            <h4 className='md:text-xl lg:text-2xl font-bold text-accent text-center'>Order Generated on {format(date, 'PP')}</h4>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services?.map(service => <OrderItems
                        key={service._id}
                        service={service}
                        setDevelopment={setDevelopment}
                    ></OrderItems>)
                }
            </div>
            {development && <OrderModal
                date={date}
                development={development}
                setDevelopment={setDevelopment}
                refetch={refetch}
            ></OrderModal>}
        </div>
    );
};

export default OrderDetails;