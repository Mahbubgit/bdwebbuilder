import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import useLoginUser from '../../hooks/useLoginUser';

const MyProfile = () => {
    const [user, isLoading] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginUserData, loginUserLoading] = useLoginUser(user);

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
                        designation: data.designation,
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
                        .then(data => {
                            // console.log('User Profile', updated);
                            if (data.modifiedCount) {
                                toast.success('Profile Updated Successfully.');
                                // reset();
                            }
                            else {
                                toast.error('Failed to update profile data');
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
            <div className='text-center mt-6'>

                <h2 className="text-2xl">My Profile</h2>
                {
                    loginUserData.img
                        ?
                        <div className="avatar justify-center m-3">
                            <div className="w-24 rounded ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={loginUserData.img} alt="Profile" />
                            </div>
                        </div>
                        :
                        <p className='font-bold text-red-700 m-3'>Please update your profile so that your information can be use to everywhere.</p>
                        
                }
            </div>

            <form className='lg:ms-96 md:ms-48 sm:ms-2' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        defaultValue={loginUserData.name ? loginUserData.name : ''}
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
                        defaultValue={loginUserData.company ? loginUserData.company : ''}
                        {...register("company", {
                            required: {
                                value: true,
                                message: 'Company is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.company?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.company.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Designation</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Designation"
                        defaultValue={loginUserData.designation ? loginUserData.designation : ''}
                        className="input input-bordered w-full max-w-xs"
                        {...register("designation", {
                            required: {
                                value: true,
                                message: 'Designation is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.designation?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.designation.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        maxLength={11}
                        defaultValue={loginUserData.mobile ? loginUserData.mobile : ''}
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
                        defaultValue={loginUserData.address ? loginUserData.address : ''}
                        className="input input-bordered w-full max-w-xs"
                        {...register("address", {
                            required: {
                                value: true,
                                message: 'Address is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.address?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.address.message}</span>}
                    </label>
                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Your Photo</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image")}
                    />
                </div>
                <div>
                    <input className='btn w-full max-w-xs btn-outline mt-3' type="submit" value="Update" />
                    <p className='text-red-700'>*** Please edit all fields for update. ***</p>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;