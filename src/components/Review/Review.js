import React from 'react';
import './Review.css'
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Review = (props) => {
    const { name, img, review, rating } = props.review;
    return (
        <Col>
            <Card style={{ height: '510px' }}>
                <Card.Img variant="top" src={img} className="card-img" />
                <Card.Body>
                    <Card.Title className='text-center mb-3 fw-bold fs-4'>{name}</Card.Title>
                    <Card.Text className='mb-2'>
                        <strong>Review:</strong> {review}
                    </Card.Text>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating> <span>{rating} Stars</span>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;