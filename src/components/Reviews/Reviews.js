import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [person, setPerson] = useReview();
    return (
        <div className='container my-5'>
            <Row lg={3} xs={1} className="g-5">
                {
                    person.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews; 