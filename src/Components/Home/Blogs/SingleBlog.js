import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const SingleBlog = ({ blog }) => {
    return (
        <div className="mb-3 text-start">
            <Container>
                <Row>
                    <Col xs={12} md={3}>
                        <img src={blog.blog_image} style={{width: '100%', height: '150px'}}/>
                    </Col>
                    <Col xs={12} md={9}>
                        <h4>{blog.blog_title}</h4>
                        <h6>{blog.traveller}</h6>
                        <br/>
                        <p>{blog.description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SingleBlog;