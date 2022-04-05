import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Banner from '../Banner/Banner';
import Review from '../Review/Review';

const Home = () => {
    const [person, setPerson] = useReview();
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <div className='container my-5 mx-auto'>
                <h1 className='text-center'>Customer Reviews</h1>
                <div className='mt-5'>
                    <Row lg={3} xs={1} className="g-5">
                        {
                            person.slice(0, 3).map(review => <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                        }
                    </Row>
                </div>
                <div className='mt-4 text-center'>
                    <Button onClick={() => navigate('/reviews')} variant="primary">See All Reviews</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;