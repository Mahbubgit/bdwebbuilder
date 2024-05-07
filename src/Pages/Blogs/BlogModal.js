import React from 'react';

const BlogModal = ({ viewBlog}) => {
    const { img, title, description, bloggerName, postingDate } = viewBlog;
    return (
        <div>
            <input type="checkbox" id="blog-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <label htmlFor="blog-modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    <img src={img} alt="Blog Pic" className='rounded-lg shadow-xl lg:max-w-md' />
                    
                    <h3 className="font-bold my-2 text-xl uppercase text-center text-secondary">{title}</h3>
                    <p className='text-end'><small>{bloggerName}</small><small>{postingDate}</small></p>
                    <p className='text-justify mt-2'>{description}</p>
                    <label htmlFor="blog-modal" className="btn btn-sm mt-3 text-white font-bold btn-outline btn-error">Close</label>
                </div>
            </div>
        </div>
    );
};

export default BlogModal;