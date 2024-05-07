import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import useLoginUser from '../../hooks/useLoginUser';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import { format } from 'date-fns';

const AddBlog = () => {
    const [user, isLoading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loginUserData, loginUserLoading] = useLoginUser(user);
    const today = new Date();
    /**
     * *
     * 3 ways to store images
     * 1. Third party storage (Free open public storage is okay for practice project)
     * 2. Your own storage in your own server (file system)
     * 3. Database: MongoDB
     * 
     * YUP to validate image file. Search YUP file validation for react hook form
     * */

    const imageStorageKey = '8be01473d7fc1567a492620a31b4d0fc';

    const onSubmit = async data => {
        // console.log('data', data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const blogs = {
                        title: data.title,
                        description: data.description,
                        bloggerName: data.bloggerName,
                        postingDate: data.postingDate,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/addBlog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(blogs)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Your blog added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add your blog');
                            }
                        })
                }
            })
    };

    if (isLoading || loginUserLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='text-2xl text-center mt-2'> Add A Blog Here.</h2>
                <form className='lg:ms-96 md:ms-48 sm:ms-2' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Blog Image</span>
                        </label>
                        <input
                            type="file"
                            className="input input-bordered w-full max-w-xs"
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.image.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Blog Title</span>
                        </label>
                        <textarea
                            type="textarea"
                            placeholder="Blog Title"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: 'Blog Title is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.title?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.title.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Blog Description</span>
                        </label>
                        <textarea
                            type="textarea"
                            placeholder="Blog Description"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.description.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Blogger Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Blogger Name"
                            className="input input-bordered w-full max-w-xs"
                            value={loginUserData?.name}
                            {...register("bloggerName", {
                                required: {
                                    value: true,
                                    message: 'Blogger Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.bloggerName?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.bloggerName.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Posting Date</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Posting Date"
                            className="input input-bordered w-full max-w-xs"
                            value={format(today, 'dd MMMM, yyyy')}
                            {...register("postingDate")}
                        />
                    </div>

                    <div>
                        <input className='btn w-full max-w-xs btn-outline mt-3' type="submit" value="Add Your Blog" />
                        <p className='text-red-700'>*** Please input all fields to add a Blog. ***</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;