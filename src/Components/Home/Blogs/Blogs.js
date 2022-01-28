import React, { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/read-blogs")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBlogs(data);
        })
    }, []);

    return (
        <div>
            <h2>Blogs</h2>
            <div>
                {
                    blogs.map(blog => <SingleBlog key={blog._id} blog={blog}></SingleBlog>)
                }
            </div>
        </div>
    );
};

export default Blogs;