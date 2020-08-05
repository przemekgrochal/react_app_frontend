import React from 'react';
import LogOut from '../../Auth/LogOut';


const LogOutButton = () => {

    const logoutUser = (e) => {
        if(LogOut() === true){
            window.location="/";
        }
    }

    return (
        <>
            <button type="button" className="btn btn-info" onClick={logoutUser}>Wyloguj</button>
            {/* <button onClick={logoutUser}>Wyloguj</button>  */}
        </>
    );
}

export default LogOutButton;