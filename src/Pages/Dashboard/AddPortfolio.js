import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const AddPortfolio = () => {

    const { data: categories, isLoading } =
        useQuery(['viewCategory'],
            () => fetch(`http://localhost:5000/viewCategory`)
                .then(res => res.json())
        );

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '8be01473d7fc1567a492620a31b4d0fc';

    const onSubmit = async data => {
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
                    const portfolio = {
                        category: data.category,
                        client: data.client,
                        projectDate: data.projectDate,
                        projectURL: data.projectURL,
                        projectTitle: data.projectTitle,
                        description: data.description,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/addPortfolio', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(portfolio)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Portfolio added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add Portfolio');
                            }
                        })
                }
            })
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div>
                <h2 className='text-2xl text-center mt-2'> Add A Portfolio Here.</h2>
                <form className='lg:ms-96 md:ms-48 sm:ms-2' onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Portfolio Image</span>
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
                            <span className="label-text">Category</span>
                        </label>

                        <select {...register("category")} name='category' className="select select-bordered w-full max-w-xs flex">
                            {categories && categories.map((catName, index) =>
                                <option key={index} value={catName}>{catName}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Client</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Client Name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("client", {
                                required: {
                                    value: true,
                                    message: 'Client Name is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.client?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.client.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Project Date</span>
                        </label>
                        <input
                            type="date"
                            placeholder="Project Date"
                            className="input input-bordered w-full max-w-xs"
                            {...register("projectDate")}
                        />
                    </div>
                    <label className="label">
                        {errors.projectDate?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.projectDate.message}</span>}
                    </label>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Project URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Project URL"
                            className="input input-bordered w-full max-w-xs"
                            {...register("projectURL", {
                                required: {
                                    value: true,
                                    message: 'Project URL is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.projectURL?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.projectURL.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Project Title</span>
                        </label>
                        <textarea
                            type="textarea"
                            placeholder="Project Title"
                            className="textarea textarea-bordered w-full max-w-xs"
                            {...register("projectTitle", {
                                required: {
                                    value: true,
                                    message: 'Project Title is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.projectTitle?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.projectTitle.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="textarea"
                            placeholder="Project Description"
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

                    <div>
                        <input className='btn w-full max-w-xs btn-outline mt-3' type="submit" value="Add Portfolio" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPortfolio;