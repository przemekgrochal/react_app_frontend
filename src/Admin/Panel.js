import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
} from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import NavbarAdmin from './NavbarAdmin/NavbarAdmin';
import auth  from '../Auth/Auth';

const Panel = ({match}) => {

    return (
        <>
            {
                auth() ?
                    <>
                        {
                            (match === "dashboard") ? <Dashboard /> : <NavbarAdmin />
                        }
                    </>
                    :
                    <>
                        <Redirect to='/' />
                    </>
            }
        </>
    );
}

export default Panel;