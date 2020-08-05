import React from 'react';
import UsersList from "./UsersList/UsersList";
import AddUser from "./AddUser/AddUser";

const Users = ({handleClick}) => {

    return (
        <>
            <li>
                <a href="#" data-toggle="collapse"
                   data-target="#sidebar-users-nav"
                   aria-expanded="false"
                   aria-controls="conferences-nav"
                   onClick={handleClick}
                   data-toggle-active="active"
                >
                    <i className="fa fa-user"></i>
                    Użytkownicy
                </a>
                <ul className="collapse sidebar-conferences-ul" id="sidebar-users-nav">
                    <UsersList handleClick={handleClick}/>
                    <AddUser handleClick={handleClick}/>
                </ul>
            </li>
        </>
    );
}

export default Users;
