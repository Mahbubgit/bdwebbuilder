import React from 'react';

const Review = ({ reviews }) => {
    const { img, name, designation, location, review, post, rating } = reviews;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-justify'>{review}</p>
                <div className='flex items-center mt-2'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='User' />
                        </div>
                    </div>
                    <div className='ms-3'>
                        <h4 className="text-xl">{name}</h4>
                        <p>{designation}</p>
                        <p>{location}</p>
                    </div>
                    <div className='mt-6'>
                        <p className='ps-16'> {rating ? 'Rating: ' + rating : ' '}</p>
                        <p className='ps-16'>{post}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;