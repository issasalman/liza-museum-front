import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../components/imgs/museumLogo.png";

export class TestHeader extends Component {
  render() {
    return (
      <div>
        <header>
          <img id="logiImage" src={LogoImage} alt="Logo Image" />

          {/* <p id="logiText">Liza Museum Arts</p> */}

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Collections">Collections</Link>
              </li>
              <li>
                <Link to="/Event">Event</Link>
              </li>

              <li class="dropdown">
                <Link to="/Aboutus">About us</Link>

                <div class="dropdown-content">
                  <Link to="/Aboutus">About The Team</Link>

                  <Link to="/Feedback">Feedback</Link>
                </div>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default TestHeader;
