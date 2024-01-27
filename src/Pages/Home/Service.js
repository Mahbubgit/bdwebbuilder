import React from 'react';
import services1 from '../../img/services/services1.jpg';

const Service = ({service}) => {
    const {name, description} =service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="pt-10">
                <img src={services1} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;