import React from 'react'

const Auth = () => {

    const checkLoggedUser = (user) => {

        if(window.localStorage.getItem("user")) {
            
            let user  = window.localStorage.getItem("user");
            let userDecode = window.atob(user);
            let userObject = JSON.parse(userDecode);
            
            return true;

        } else {

            return false;
        }
    }

    return checkLoggedUser();;
}

export default Auth;