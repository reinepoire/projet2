import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse} from "mdbreact";
import "../Styles/Navbar.css";

class NavBar extends Component {
  state = {
    isOpen: false
  };
  
  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
    return (
      <>
        <MDBNavbar color="white" light expand="md" clasnName="align-items-center">
          <MDBNavbarBrand className="p-0 align-self-center">
            <h1 className="dark-text text-lowercase m-0 h2">Paris Events</h1>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink to="/" exact className="text-uppercase font-weight-bold">Accueil</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/recherche" exact className="text-uppercase font-weight-bold">Recherche</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/favoris" className="text-uppercase font-weight-bold">Favoris</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
  

      </>
      );
    }
  }
  
  export default NavBar;