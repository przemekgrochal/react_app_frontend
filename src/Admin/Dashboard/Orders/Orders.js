import React from 'react';
import './style/Orders.scss';

const Orders = ({handleClick}) => {

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
                    <i className="fa fa-book"></i>
                    Zamówienia
                </a>
            </li>
        </>
    );
}

export default Orders;