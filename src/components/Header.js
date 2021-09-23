import React from "react";
import { Navbar, Container, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/header.css";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import NavLink from "react-bootstrap/NavLink";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { withAuth0 } from "@auth0/auth0-react";

class Header extends React.Component {
  render() {
    const isAuth = this.props.auth0.isAuthenticated;
    return (
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand>
              {" "}
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Nav variant="pills">
              <NavItem>
                {" "}
                <Link to="/">Home</Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/Collections">Collections</Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/Event">Event</Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/profile">profile</Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/Aboutus">Aboutus</Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link to="/Feedback">Feedback</Link>{" "}
              </NavItem>
            </Nav>
          </Container>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {isAuth && (
              <NavItem style={{ paddingLeft: "1%" }}>
                {" "}
                <Link to="/profile">Profile </Link>
              </NavItem>
            )}

            {isAuth ? <LogoutButton /> : <LoginButton />}
          </Navbar>
        </Navbar>

        <br />
      </>
    );
  }
}

export default withAuth0(Header);
