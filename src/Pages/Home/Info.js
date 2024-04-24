import React from 'react';
import InfoCard from './InfoCard';
import marker from '../../img/icons/marker.svg';
import email from '../../img/icons/email.png';
import phone from '../../img/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-10'>
            <InfoCard
                bgClass="p-2 bg-gradient-to-r from-primary to-secondary"
                cardTitle="Location"
                cardDetails="Pa 2/1, South Badda, Gulshan, Dhaka"
                img={marker} >
            </InfoCard>
            <InfoCard
                bgClass="p-2 bg-gradient-to-r from-secondary to-accent"
                cardTitle="Email"
                cardDetails="info@example.com"
                img={email}>
            </InfoCard>
            <InfoCard
                bgClass="p-2 bg-gradient-to-r from-accent to-primary"
                cardTitle="Call"
                cardDetails="+8801717247943, +8801533620350"
                img={phone}>
            </InfoCard>
        </div>
    );
};

export default Info;