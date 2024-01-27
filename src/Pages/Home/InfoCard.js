import React from 'react';

const InfoCard = ({ img, cardTitle,bgClass,cardDetails }) => {
    return (
        <div className={`card lg:card-side shadow-xl ${bgClass}`}>
            <figure className='pl-3'>
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default InfoCard;