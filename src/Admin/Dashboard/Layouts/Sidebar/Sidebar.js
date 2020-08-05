import React, { useState, useEffect } from 'react';
import './style/Sidebar.scss';
import logo from "../../../../Front/layouts/Header/img/logo.png";
import Conferences from "../../Conferences/Conferences";
import Orders from "../../Orders/Orders";
import Blog from "../../Blog/Blog";
import UserProfile from "../../UserProfile/UserProfile";
import Users from "../../Users/Users";

const Sidebar = () => {

    const [activeElement, setActiveElement] = useState(null);

    useEffect(() => {

        let list = document.querySelectorAll('[data-toggle-active="active"]');
        let sidebarUl = document.querySelector('[data-sidebar-nav="nav"]');
        let favicon = document.querySelectorAll(".fa");

        favicon.forEach((item) => {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
            }, false);
        });

         if(activeElement !== null) {
             list.forEach((item) => {

                 item.classList.remove("sidebar-active");
                 activeElement.classList.add("sidebar-active");

                 if(activeElement.parentElement.parentElement.classList.contains("show")){
                     activeElement.parentElement.parentElement.parentElement.firstChild.classList.add("sidebar-active");
                 }

                 if(item.parentElement.parentElement.classList.contains("show")) {
                     item.parentElement.parentElement.classList.remove("show");
                     if(!item.parentElement.parentElement.classList.contains("sidebar-nav-ul")){
                         activeElement.parentElement.parentElement.classList.add("show");
                     }
                 }

             });
         }

        if(sidebarUl.classList.contains("sidebar-active")){
            sidebarUl.classList.remove("sidebar-active");
        }

    });

    const handleClick = e => setActiveElement(e.target);

    return (
        <>
            <div className="sidebar" data-color="purple" data-background-color="white">
                <div className="logo">
                    <a href="/" className="simple-text logo-normal">
                        <img className="nav-logo" src={logo} style={{width: "80%", height: "auto"}}/>
                    </a>
                </div>
                <div className="sidebar-wrapper">
                    <ul className="sidebar-nav-ul" data-sidebar-nav="nav">
                        <Conferences handleClick={handleClick}/>
                        <Orders handleClick={handleClick}/>
                        <Blog handleClick={handleClick}/>
                        <UserProfile handleClick={handleClick}/>
                        <Users handleClick={handleClick}/>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Sidebar;