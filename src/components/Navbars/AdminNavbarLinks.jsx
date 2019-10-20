import React, { Component } from "react";
import { IoIosSettings, IoIosLogOut } from "react-icons/io";
import { Nav, NavDropdown, MenuItem } from "react-bootstrap";
import NavigationBar from './Navbar.module.scss';

class AdminNavbarLinks extends Component {
  render() {
    
    return (
      <div>
        <Nav pullRight>

          <NavDropdown 
            eventKey={2}
            title="Admin"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}><IoIosSettings className={NavigationBar.ionicons} />Settings</MenuItem>
            <MenuItem eventKey={2.2}><IoIosLogOut className={NavigationBar.ionicons} />Logout</MenuItem>
          </NavDropdown>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
