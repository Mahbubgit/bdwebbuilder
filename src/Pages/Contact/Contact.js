import React from 'react';
import Info from '../Home/Info';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Contact = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = async data => {

        const contactInfo = {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            subject: data.subject,
            messageInfo: data.messageInfo
        }
        // send to your database
        fetch('http://localhost:5000/addContactInfo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(contactInfo)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Your Contact Information Added Successfully');
                    reset();
                }
                else {
                    toast.error('Failed To Add Your Contact Information');
                }
            })
    }

    return (
        <section>
            <Info></Info>
            <div className='flex justify-center items-center text-center'>
                <div>
                    <h4 className='text-xl lg:text-2xl text-primary font-bold m-5'>Contact Us</h4>
                    <h2 className='text-2xl lg:text-4xl text-accent'>Stay connected with us</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-3 my-6'>

                        <div className="form-control mx-auto w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}
                            </label>
                        </div>

                        <div className="form-control mx-auto w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                            </label>
                        </div>
                        
                        <div className="form-control mx-auto w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Your Mobile No"
                                className="input input-bordered w-full max-w-xs"
                                {...register("mobile", {
                                    required: {
                                        value: true,
                                        message: 'Mobile Number is Required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-600">{errors.mobile.message}</span>}
                            </label>
                        </div>


                        <div className="form-control mx-auto w-full max-w-xs">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="input input-bordered w-full max-w-xs"
                                {...register("subject", {
                                    required: {
                                        value: true,
                                        message: 'Subject is Required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.subject?.type === 'required' && <span className="label-text-alt text-red-600">{errors.subject.message}</span>}
                            </label>
                        </div>

                        <div className="form-control mx-auto w-full max-w-xs">
                            <textarea
                                type="textarea"
                                placeholder="Your Message"
                                className="textarea textarea-bordered w-full max-w-xs"
                                {...register("messageInfo", {
                                    required: {
                                        value: true,
                                        message: 'Message is Required'
                                    }
                                }
                                )}
                            />
                            <label className="label">
                                {errors.messageInfo?.type === 'required' && <span className="label-text-alt text-red-600">{errors.messageInfo.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-outline capitalize mb-10' type="submit" value="Send Your Message" />
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;