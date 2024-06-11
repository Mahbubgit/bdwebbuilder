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
                cardTitle="অবস্থান"
                cardDetails="প 2/1, দক্ষিণ বাড্ডা, গুলশান, ঢাকা"
                img={marker} >
            </InfoCard>
            <InfoCard
                bgClass="p-2 bg-gradient-to-r from-secondary to-accent"
                cardTitle="ইমেইল"
                cardDetails="info@example.com"
                img={email}>
            </InfoCard>
            <InfoCard
                bgClass="p-2 bg-gradient-to-r from-accent to-primary"
                cardTitle="ফোন"
                cardDetails="+৮৮০১৭১৭২৪৭৯৪৩, +৮৮০১৫৩৩৬২০৩৫০"
                img={phone}>
            </InfoCard>
        </div>
    );
};

export default Info;