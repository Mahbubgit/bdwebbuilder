import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import BlogModal from './BlogModal';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [viewBlog, setViewBlog] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        // <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div>
            <div className='lg:grid-cols-1'>
                {
                    blogs.map(blog => <Blog
                        key={blog._id}
                        blog={blog}
                        setViewBlog={setViewBlog}
                    ></Blog>
                    )
                }
            </div>
            {viewBlog && <BlogModal
                viewBlog={viewBlog}
            ></BlogModal>
            }

        </div>
    );
};

export default Blogs;