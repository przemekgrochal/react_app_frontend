import React from 'react'

const LogOut = () => {

    const checkLoggedUser = (user) => {

        if(window.localStorage.getItem("user")) {
            window.localStorage.removeItem("user");
            return true;
        }
    }

    return checkLoggedUser();
}

export default LogOut;