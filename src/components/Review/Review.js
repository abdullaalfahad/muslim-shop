import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {
    const { name, img, review, rating } = props.review;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} className="w-25" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {review}
                        </Card.Text>
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Review;