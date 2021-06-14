import React, { useState } from 'react';
import './FeaturedProjects.scss'

import { Carousel } from '3d-react-carousal';
import slides from './data'
import SmallScreen from './SmallScreen';

const FeaturedProjects = () => {

    const [largeScreen, setLargeScreen] = useState(null);
    const [smallScreen, setSmallScreen] = useState(null);

    return (
        <div id='featured' className='container min-h-92'>
        <div className='pt-12'>
            <div className='pb-5'>
                <h2 className="color-5 section-title px-3 my-3">Featured Projects</h2>
            </div>

            <div className="container-fluid d-block d-md-none">
                <SmallScreen />
            </div>

            <div className="container-fluid d-none d-md-block">
                <Carousel slides={slides} autoplay={true} interval={5000} />
            </div>

            <div className='d-flex justify-content-center my-5 pt-5'>
                <button className="btn btn-dark btn-brand px-3 py-2">See More</button>
            </div>
        </div>
    </div>
    );
};

export default FeaturedProjects;