import React from 'react'

const LogIn = (userEmail, userPassword) => {

    let loggedUser = false;

    let user = {}
    
        if((userEmail === "admin@admin.eu") && (userPassword === "admin123")){
    
            user.name = 'Jan';
            user.lastName = 'Kowalski';
            user.role = 'admin';
            user.email = userEmail;
            user.password = userPassword;
    
            let userJson = JSON.stringify(user)
            let userCoded = window.btoa(userJson);

            if(!window.localStorage.getItem("user")) {

                window.localStorage.setItem("user", userCoded);

                loggedUser = true;

            } else {
                loggedUser = true;
            } 
        }

    return loggedUser;

    // return userPassword + ' ---to z pliku LogIn.js--- ' + userEmail;
}

export default LogIn;