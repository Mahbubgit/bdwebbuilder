import React from 'react';
import blank from '../../img/testimonials/blank.jpg';

const Review = ({ reviews }) => {
    const { name, designation, location, review } = reviews;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className='flex items-center mt-2'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary text-center ring-offset-base-500 mr-3">
                            <img src={blank} alt='Review' />
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl">{name}</h4>
                        <p>{designation}</p>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;