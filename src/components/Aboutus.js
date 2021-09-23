import React from "react";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import "../Style/Aboutus.css";
// import Image1 from "../components/teamimg/h.jpg";
// import Image2 from "../components/teamimg/omar.jpeg";
// import Image3 from "../components/teamimg/issapic.png";
// import Image4 from "../components/teamimg/nashat.jpg";
// import Image5 from "../components/teamimg/qutada.jpg";
// import Image6 from "../components/teamimg/ahmad.jpg";
// import body from "../components/teamimg/pic.jpg";
import firstimage from "../components/teamimg/firstimage.jpg";
import secondimage from "../components/teamimg/secondimage.jpg";
import first from "../components/teamimg/first.jpg";
import sec from "../components/teamimg/sec.jpg";
import Carousel from "react-bootstrap/Carousel";

// import { Link } from "react-router-dom";

class Aboutus extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            marginTop: "50px",
          }}
        >
          <h3>-Hall of Fame-</h3>
        </div>
        <div
          style={{
            marginBottom: "100px",
          }}
          class="d-flex justify-content-center"
        >
          <Carousel id="shad" fade className="d-block w-100">
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={first} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={secondimage}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img className="d-block w-100" src={sec} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={firstimage}
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}
export default Aboutus;
