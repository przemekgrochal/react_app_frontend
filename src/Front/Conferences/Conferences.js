import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import ConferencesList from '../Conferences/components/ConferencesList';

const Conferences = () => {

    return (
        <>
            <HeaderBanner />        
            <ConferencesList /> 
        </>
    );
}

export default Conferences;