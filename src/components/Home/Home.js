import React from 'react';
import Category from './Category';
import Leatest from './Leatest';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <Leatest></Leatest>
        </div>
    );
};

export default Home;