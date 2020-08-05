import React from 'react';
import './style/Orders.scss';

const UserProfile = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#"
                   data-target="#conferences-nav"
                   aria-expanded="false"
                   aria-controls="conferences-nav"
                   onClick={handleClick}
                   data-toggle-active="active"
                >
                    <i className="fa fa-user"></i>
                    Profil Użytkownika
                </a>
            </li>
        </>
    );
}

export default UserProfile;
