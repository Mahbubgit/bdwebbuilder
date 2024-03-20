import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const AddAReview = () => {

    const [user, isLoading] = useAuthState(auth);
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
                    const review = {
                        name: data.name,
                        rating: data.rating,
                        description: data.description,
                        location: data.location,
                        post: data.post,
                        img: img
                    }
                    // send to your database
                    fetch('https://calm-lake-97858.herokuapp.com/review', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(review)
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
                // console.log('imgbb', result);
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }


    return (

        <div>
            {/* <h2 className='text-4xl text-primary font-bold'> Please Add A Review</h2> */}
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        value={user.displayName}
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
                        <input type="radio" name="rating-10" value="5.00" {...register("rating")} className="bg-green-500 mask mask-star-2 mask-half-2" checked/>
                    </div>
                </div>

                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="input input-bordered w-full max-w-xs"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'Description is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}
                    </label>
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Location"
                        className="input input-bordered w-full max-w-xs"
                        {...register("location")}
                    />
                </div>
                <div className="form-control mx-auto w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Post [Month, Year]</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Post month, year"
                        className="input input-bordered w-full max-w-xs"
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
                                message: 'image is Required'
                            }
                        }
                        )}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className="label-text-alt text-red-600">{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs' type="submit" value="Add Review" />
            </form>
        </div>
    );
};

export default AddAReview;