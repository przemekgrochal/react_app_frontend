import React from 'react';

const ConferenceCategories = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#" data-toggle="collapse"
                   data-target="#conferences-nav1" aria-expanded="false"
                   aria-controls="conferences-nav1"
                   onClick={handleClick}
                   data-toggle-active="active"
                   data-ref="conferences"
                >
                    <i className="fa fas fa-angle-right"></i>
                    Kotegorie Konferencji
                </a>
            </li>
        </>
    );
}

export default ConferenceCategories;