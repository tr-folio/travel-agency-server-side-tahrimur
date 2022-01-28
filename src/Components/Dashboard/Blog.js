import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const Blog = ({ blog }) => {
    const updatedBlog = {
        blog_title: blog.blog_title,
		blog_image: blog.blog_image,
		traveller: blog.traveller,
		description: blog.description,
		category: blog.category,
		expense: blog.expense,
		location: blog.location,
		date: blog.date,
		time: blog.time,
		rating: blog.rating
    }

    const handleInputField = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        if (value) {
            updatedBlog[field] = value;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`https://mysterious-inlet-93835.herokuapp.com/update-blog/${blog._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedBlog)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="mb-3 text-start p-3" style={{border: '1px solid black', borderRadius: '15px'}}>
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <img src={blog.blog_image} style={{width: '100%', height: '150px'}}/>
                    </Col>
                    <Col xs={12} md={9}>
                        <h4 style={{cursor: 'pointer'}}>{blog.blog_title}</h4>
                        <h6>{blog.traveller}</h6>
                        <p>
                            <strong>Category: </strong>{blog.category}&nbsp;|&nbsp;
                            <strong>Expense: </strong>${blog.expense}&nbsp;|&nbsp;
                            <strong>Location: </strong>{blog.location}&nbsp;|&nbsp;
                            <strong>Date: </strong>{blog.date}&nbsp;|&nbsp;
                            <strong>Time: </strong>{blog.time}&nbsp;|&nbsp;
                            <strong>Rating: </strong>
                            <Rating
                                initialRating={blog.rating}
                                fullSymbol={<i className="fa fa-star checked"></i>}
                                emptySymbol={<i className="fa fa-star"></i>}
                            />
                        </p>
                        <p><strong>Description: </strong>{blog.description}</p>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container>
                <h4 className="text-start">Update This Blog</h4>
                <form onSubmit={handleSubmit}>
                    <label><strong>Update Blog Title:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="blog_title"/>
                    <label><strong>Update Blog Image Url:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="blog_image"/>
                    <label><strong>Update Blog Traveler:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="traveller"/>
                    <label><strong>Update Blog Description:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="description"/>
                    <label><strong>Update Blog Category:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="category"/>
                    <label><strong>Update Blog Expense:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="expense"/>
                    <label><strong>Update Blog Location:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="location"/>
                    <label><strong>Update Blog Date:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="date"/>
                    <label><strong>Update Blog Time:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="time"/>
                    <label><strong>Update Blog Rating:</strong></label>
                    <input className="w-100 mb-3" onBlur={handleInputField} type="text" name="rating"/>
                    <button className="btn btn-warning" type="submit">Update</button>
                    &nbsp;<button className="btn btn-danger">Delete the Blog</button>
                </form>
            </Container>
        </div>
    );
};

export default Blog;