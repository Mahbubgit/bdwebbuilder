import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import useLoginUser from '../../hooks/useLoginUser';
import { format } from 'date-fns';

const MyReview = () => {
    const [user, isLoading] = useAuthState(auth);
    const [loginUserData, loginUserLoading] = useLoginUser(user);
    const today = new Date();

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

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
                    // console.log(data.rating);
                    const reviews = {
                        name: data.name,
                        email: user.email,
                        rating: data.rating,
                        review: data.review,
                        designation: data.designation,
                        location: data.location,
                        post: data.post,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/addReview', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(reviews)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            // console.log('review', inserted);
                            if (inserted.insertedId) {
                                toast.success('Your review added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add your review');
                            }
                        })
                }
            })
    };

    if (isLoading || loginUserLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='text-center'>
            <h2 className='text-2xl text-center mt-2'> My Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        value={loginUserData?.name}
                        {...register("name")}
                    />

                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <div className="rating rating-lg rating-half input input-bordered">
                        <input type="radio" name="rating-10" value="0.50" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" value="1.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" value="1.50" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" value="2.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" value="2.50" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" value="3.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" value="3.50" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" value="4.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" />
                        <input type="radio" name="rating-10" value="4.50" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-1" />
                        <input type="radio" name="rating-10" value="5.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" checked />
                    </div>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        type="textarea"
                        placeholder="Review"
                        className="textarea textarea-bordered w-full max-w-xs"
                        {...register("review", {
                            required: {
                                value: true,
                                message: 'Review is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.review?.type === 'required' && <span className="label-text-alt text-red-600">{errors.review.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Designation"
                        className="input input-bordered w-full max-w-xs"
                        value={loginUserData?.designation}
                        {...register("designation")}
                    />
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        value={loginUserData?.address}
                        {...register("location")}
                    />
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Post [Month, Year]</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Posting Month and Year"
                        className="input input-bordered w-full max-w-xs"
                        value={format(today, 'MMMM, yyyy')}
                        {...register("post")}
                    />
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs btn-outline' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default MyReview;