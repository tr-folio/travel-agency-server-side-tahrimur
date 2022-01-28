import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blog from "./Blog";

const AdminDashboard = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://mysterious-inlet-93835.herokuapp.com/read-blogs")
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setBlogs(data);
        })
    }, []);

    return (
        <div>
            <Container>
                <h3 className="text-start bg-primary text-white p-3"><strong>Admin Dashboard</strong></h3>
                <h3 className="text-start my-3">Display/Update/Delete Blogs</h3>
                <div>
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default AdminDashboard;