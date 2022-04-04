import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [person, setPerson] = useReview();
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Customer Review</h1>
            <div className='mt-4'>
                <Row lg={3} xs={1} className="g-4">
                    {
                        person.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Reviews; 