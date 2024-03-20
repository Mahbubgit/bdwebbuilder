import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
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
                    const profileUser = {
                        name: data.name,
                        email: user.email,
                        company: data.company,
                        mobile: data.mobile,
                        address: data.address,
                        img: img
                    }
                    // Send to Database
                    fetch(`http://localhost:5000/profileUser/${user.email}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(profileUser)
                    })
                        .then(res => res.json())
                        .then(updated => {
                            // console.log('User Profile', updated);
                            if(updated.modifiedCount){
                                toast.success('Profile Updated Successfully.');
                                // reset();
                            }
                            else{
                                toast.error('Failed to update profile data');
                            }
                        })
                }
                // console.log('user data', user);
            })
    };

    return (
        <div>

            <h2 className="text-2xl mt-2 mb-2 text-center">My Profile</h2>

            <form className='lg:ms-96 md:ms-48 sm:ms-2' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        value={user.email}
                        disabled
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Company Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("company")}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Mobile No"
                        maxLength={11}
                        className="input input-bordered w-full max-w-xs"
                        {...register("mobile", {
                            required: {
                                value: true,
                                message: 'Mobile No is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.mobile?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.mobile.message}</span>}
                    </label>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text-area">Address</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Address"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address")}
                    />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Photo is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.image.message}</span>}
                    </label>
                </div>

                <input className='btn w-full max-w-xs btn-outline mt-3' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default MyProfile;