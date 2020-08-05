import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../img/logo.png'; 
import '../style/Navigation.scss';


const Navigation = () => {

  const refToHamburger = useRef(null);
  const refToOpenMenu = useRef(null);
  const refToDropDownMenu = useRef(null);
  const [dropDownClass, setDropDownClass] = useState("menu-dropdown-hidden");
  const [layoutWidth, setLayoutWidth] = useState(null);

   const menuList = [
    { name: "STRONA GŁÓWNA", path: "/", exact: true },
    { name: "KONFERENCJE", path: "/conferences" },
    { name: "BLOG", path: "/blog" },
    { name: "PRELEGENCI", path: "/prelegents" },
    { name: "AMBASADORZY", path: "/ambassadors",
      dropdown: [
          { name: "SYLWETKI AMBASADORÓW", path: "/ambassadors/profiles-ambassadors" },
          { name: "FIRMY I INSTYTUCJE", path: "/ambassadors/company-and-institutions" },
          { name: "KODEKS AMBASADORA", path: "/ambassadors/code" },
          { name: "MANIFEST AMBASADORA", path: "/ambassadors/manifest" }
      ]
    },
    { name: "PARTNERZY", path: "/partners" },
    { name: "O NAS", path: "/about" },
    { name: "KONTAKT", path: "/contact" },
  ]  

  const handleHamburger = () => {

    refToHamburger.current.classList.toggle("change");
    refToOpenMenu.current.classList.toggle("open-menu");
  }

  const checkWidth = () => {

    let bool = null;

    if (layoutWidth !== null) {
      (layoutWidth <= 902) ?  bool = true : bool = false ;
    }

    return  bool;
  }

  const handleDropDownMenu = (e) => {
  
      if((e.type === "mouseenter") && (checkWidth() === false)) {
        setDropDownClass("menu-dropdown-open")
      }
      
      if((e.type === "mouseleave") && (checkWidth() === false)){
        setDropDownClass("menu-dropdown-hidden")
      }

      if((e.type === "click") && (checkWidth() === true)) {
        if(dropDownClass !== "menu-dropdown-open") {
          setDropDownClass("menu-dropdown-open")
        } else {
          setDropDownClass("menu-dropdown-hidden")
        }
      }
  }

  const changeClassHandleDropDownMenu = () => {
    return dropDownClass;
  }

  useEffect(() => {
    setLayoutWidth(window.screen.width)
    
    const handleResize = () => {
      setLayoutWidth(window.screen.width)
    }
  
    window.addEventListener('resize', handleResize);
    
  });
  
  const menu = menuList.map( (item, index) => {

    const checkDropDowan = (list) => {
      let dropdown = '';
      if(list) {
        dropdown = list.map( (item, index) => {
          return (
              <NavLink key={index} className="nav-a" to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
          )
        });
      }
      
      return dropdown;
    }

    const dropdownMenu = () => {
      return(
        <li key={index}>
          {(item.dropdown) ?
          <ul ref={refToDropDownMenu} className="menu-dropdown-default"
              onMouseEnter = {handleDropDownMenu}
              onMouseLeave = {handleDropDownMenu}
              onClick = {handleDropDownMenu}
          >
            <li>
              <NavLink className="nav-a" to={item.path} exact={item.exact ? item.exact : false}>
                {item.name} 
              </NavLink>
            </li>
            <li className={changeClassHandleDropDownMenu()}>
              {checkDropDowan(item.dropdown)}
            </li>
          </ul> : ''}
        </li>
      )
    }

    const normalMenu = () => {
      return(
        <li key={index}>
          <NavLink className="nav-a" to={item.path} exact={item.exact ? item.exact : false}>
            {item.name}
          </NavLink>
        </li>
      )
    }

    const checkMenu = () => {
      let customMenu = null;
      (item.dropdown) ? customMenu = dropdownMenu() : customMenu = normalMenu();

      return customMenu;
    }

    return checkMenu();
  });

  const hamburger = (
    <div className="hamburger-container hamburger-hidden hamburger-show" 
         ref = {refToHamburger}
         onClick={handleHamburger}
    >
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </div>
  );
                
  return (
      <>
          <nav className="nav-default">
            <div className="container">
              <img className="nav-logo" src={logo} style={{width: "20%", height: "auto"}}/>
              {hamburger}
              <ul ref={refToOpenMenu} className="nav-ul-default nav-ul-responsive">
                {menu}
              </ul>
            </div>
          </nav>
      </>
  );
}

export default Navigation;