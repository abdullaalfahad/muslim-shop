import React from 'react';
import './Banner.css'
import BannerImg from '../../images/laptop.png'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='bg-light py-5'>
            <div className='Banner-container container d-flex justify-content-between align-items-center pe-0 flex-column flex-lg-row'>
                <div className="banner-text">
                    <h1>We Provide, Best Laptop</h1>
                    <p>Setting a budget is a good place to start when shopping for the best laptop for yourself. The good news is you can get a nice-looking, lightweight laptop with excellent battery life at prices under $500. </p>
                    <Button variant="primary">Go To Blogs</Button>
                </div>
                <div className="banner-img d-none d-lg-block">
                    <img src={BannerImg} alt="Laptop" />
                </div>
            </div>
        </div>
    );
};

export default Banner;