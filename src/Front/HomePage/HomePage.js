import React from 'react';
import Slider from './components/Slider';
import SliderMedium from './components/SliderMedium';
import Counter from './components/Counter';
import Subscribe from './components/Subscribe';
import PartnersCarusel from './components/PartnersCarusel';

const HomePage = () => {

    return (
        <>
            <Slider />
            <SliderMedium />
            <Counter />
            <Subscribe />
            <PartnersCarusel />
        </>
    );
}

export default HomePage;