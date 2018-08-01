import React from 'react';
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap';
import { Link } from 'react-router-dom';

require('./Header.scss');

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/">Wiktor Płocki</NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
