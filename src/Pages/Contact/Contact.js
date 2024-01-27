import React from 'react';
import Button from '../Shared/Button';
import Info from '../Home/Info';

const Contact = () => {
    return (
        <section>
            <Info></Info>
            <div className='flex justify-center items-center text-center'>
                <div>
                    <h4 className='text-xl lg:text-2xl text-primary font-bold m-5'>Contact Us</h4>
                    <h2 className='text-2xl lg:text-4xl text-accent'>Stay connected with us</h2>
                    <div className='grid grid-cols-1 gap-5 my-10'>
                        <input type="text" placeholder="Your Name" className='input input-bordered w-100' />
                        <input type="text" placeholder="Your Email" className='input input-bordered w-100' />
                        <input type="text" placeholder="Subject" className='input input-bordered w-100' />
                        <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                    </div>
                    <div className='capitalize mb-10'>
                        <Button>Send Message</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;