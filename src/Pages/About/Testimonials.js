import React, { useEffect, useState } from 'react';
import quote from '../../img/icons/quote.svg';
import Review from '../Home/Review';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section className='my-10  '>
            <div className='flex justify-between'>
                <div className='p-2'>
                    <h4 className='text-primary text-xl lg:text-2xl font-bold mt-10'>Testimonials</h4>
                    <h2 className='sm:text-xl md:text-2xl lg:text-4xl text-accent my-3'>What Our Clients Say</h2>
                </div>
                <div>
                    <img src={quote} className='w-20 lg:w-40' alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(reviews => <Review
                        key={reviews._id}
                        reviews={reviews}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;