import React from 'react';
// import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import AddConferences from './AddConferences/AddConferences';
import ConferenceCategories from "./ConferenceCategories/ConferenceCategories";
import ConferenceList from "./ConferenceList/ConferenceList";
import './style/Conferences.scss';

const Conferences = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#" data-toggle="collapse"
                   data-target="#sidebar-conferences-nav"
                   aria-expanded="false"
                   aria-controls="conferences-nav"
                   onClick={handleClick}
                   data-toggle-active="active"
                >
                    <i className="fa fa-university"></i>
                    Twoje Konferencje
                </a>
                <ul className="collapse sidebar-conferences-ul" id="sidebar-conferences-nav">
                    <AddConferences handleClick={handleClick}/>
                    <ConferenceList handleClick={handleClick}/>
                    <ConferenceCategories handleClick={handleClick}/>
                </ul>
            </li>
        </>
    );
}

export default Conferences;