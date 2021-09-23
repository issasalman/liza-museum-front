import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export class TestFooter extends Component {
  render() {
    return (
      <div
        id="footerDiv"
        style={{
          marginTop: "50px",
        }}
      >
        <footer>
          <h2>SIGN UP TO EMAILS</h2>

          <div className="signFooter ">
            <input
              type="email"
              id="email"
              class="form-item__input form-item__input--text"
              name="email"
              placeholder="Email address"
              aria-label="Subscribe to email newsletter"
              autocomplete="email"
            />
            <Button id="footerButton" variant="secondary">
              SIGN UP
            </Button>
          </div>
          {/* <div class="signButtonFooter">
            <button type="submit" class="btn btn--submit">
              Submit
            </button>
          </div> */}
          <div id="social">
            <SocialIcon
              className="socialButtons"
              bgColor="#cdac81"
              url="https://twitter.com/jaketrent"
            />
            <SocialIcon
              className="socialButtons"
              bgColor="#cdac81"
              url="https://www.facebook.com/jaketrent"
            />
            <SocialIcon
              className="socialButtons"
              bgColor="#cdac81"
              url="https://www.youtube.com/jaketrent"
            />
            <SocialIcon
              className="socialButtons"
              bgColor="#cdac81"
              url="https://www.google.com/jaketrent"
            />
            <SocialIcon
              className="socialButtons"
              bgColor="#cdac81"
              url="https://www.instagram.com/jaketrent"
            />
          </div>

          <p id="copyRights">
            &copy;2021 Liza Museum Arts. All rights reserved
          </p>
          <div id="allquick">
            <span id="quickLinks">
              <p
                style={{
                  marginLeft: "85px",
                }}
              >
                Quick Links
              </p>
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
              </ul>
            </span>
            <span id="quickLinks2">
              <ul>
                <li>
                  <Link to="/Aboutus">About us</Link>
                </li>
                <li>
                  <Link to="/Feedback">Feedback</Link>
                </li>

                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </span>
          </div>
          <div id="contactDiv">
            <font> Get in touch via the channels below, or by emailing </font>{" "}
            <font color="#a5773a"> contact@liza.com</font>{" "}
          </div>
        </footer>
      </div>
    );
  }
}

export default TestFooter;
