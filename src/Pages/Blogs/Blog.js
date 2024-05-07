import React from 'react';
import './Blog.css';

const Blog = ({ blog, setViewBlog }) => {
    const { img, title, description, bloggerName, postingDate } = blog;

    return (
        <div className='lg:px-6'>
            <div className='m-6 items-center text-center'>
                <h3 className="lg:text-2xl font-bold text-primary">{title}</h3>
                <p>
                    <small className='lg:mr-3'>{bloggerName}</small>
                    <small> Post: {postingDate}</small>
                </p>
            </div>
            <div className="lg:flex gap-5">
                <div>
                    <img src={img} className="sm:max-w-xs md:max-w-sm lg:w-100 rounded-lg shadow-2xl max-w-xs" alt='' />
                </div>
                <div className='sm: mt-3'>
                    <p className="py-1 text-justify limited-text">{description}</p>

                    <label
                        htmlFor="blog-modal"
                        onClick={() => setViewBlog(blog)}
                        className="btn btn-sm mt-4 text-white font-bold bg-gradient-to-r from-primary to-secondary"
                    >Read More</label>
                </div>
            </div>
        </div>
    );
};

export default Blog;