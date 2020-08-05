import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../style/TopBarHeader.scss';

const TopBarHeader = () => {
    
    const languageList = [
        { name: "Polski"},
        { name: "English"},
        { name: "Italiano"}
    ]

    const langSelect = languageList.map(item => (
        <option key={item.name}>
          {item.name}
        </option>
    ))

    return (
        <>  
            <Navbar className="custom-nav-bar"  variant="dark">
                <div className="container top-bar-header">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <select className="form-control" style={{width: "10%"}}>
                        {langSelect}
                    </select>
                </div>
            </Navbar>
        </>
    );
}

export default TopBarHeader;