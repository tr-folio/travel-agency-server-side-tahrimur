import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import Header from "../../Shared/Header";
import "./BlogDetail.css";

const BlogDetail = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/single-blog/${id}`)
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            setBlog(data);
        })
    }, []);
    return (
        <div className="text-start">
            <Header/>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img src={blog.blog_image} className="img-fluid"/>
                    </Col>
                    <Col  xs={12} md={6}>
                        <h3>{blog.blog_title}</h3>
                        <h5>{blog.traveller}</h5> <br/>
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
                        <br/>
                        <p><strong>Description: </strong>{blog.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlogDetail;