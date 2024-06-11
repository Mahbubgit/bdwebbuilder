import React from 'react';

const Review = ({ reviews }) => {
    const { img, name, designation, location, review, post, rating } = reviews;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex items-center mt-2'>
                    <div className="avatar">
                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='User' />
                        </div>
                    </div>
                    <div className='ms-3'>
                        <h4 className="text-xl">{name}</h4>
                        <p className='text-gray-400 font-bold'>{designation}</p>
                        {/* <p>{location}</p> */}
                    </div>

                </div>
                {/* <i className="bx bxs-quote-alt-left quote-icon-left"></i> */}
                <p className='text-justify'>{review}</p>
                {/* <i className="bx bxs-quote-alt-right quote-icon-right"></i> */}
                <div>
                    <p className='text-yellow-500'> {rating ? 'Rating: ' + rating : ' '} <small className='ps-36 text-gray-500'>{post}</small> </p>
                </div>
            </div>
        </div>
    );
};

export default Review;