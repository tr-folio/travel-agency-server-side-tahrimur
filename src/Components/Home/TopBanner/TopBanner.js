import React from "react";
import { Carousel, Container } from "react-bootstrap";

const TopBanner = () => {
    return (
        <Container>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/xXgrK3N/travel1.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Z86qRN3/travel2.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ibb.co/NxJXjr5/travel3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default TopBanner;