import React from 'react';

const AddUser = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#"
                   data-toggle="collapse"
                   data-target="#conferences-nav1"
                   aria-expanded="false"
                   aria-controls="conferences-nav1"
                   onClick={handleClick}
                   data-toggle-active="active"
                   data-ref="conferences"
                >
                    <i className="fa fas fa-angle-right"></i>
                    Dodaj Użytkownika
                </a>
            </li>
        </>
    );
}

export default AddUser;