import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../css/feedback.css";

export class Footer extends Component {
  render() {
    return (
      <div id="footerDiv">
        <Card className="text-center">
          <Card.Footer className="text-muted">
            <pre style={{ fontSize: "30px", fontWeight: "bold" }}>
              {" "}
              About us Countries Useful Links contact us{" "}
            </pre>
            <hr />
            <pre style={{ float: "left", paddingLeft: "140px" }}>
              We are a team of programmers USA Google home:Amman/jordan
            </pre>
            <br />
            <pre style={{ float: "left", paddingLeft: "140px" }}>
              who have collected for France Museums Email:info@example.com
            </pre>
            <br />
            <pre style={{ float: "left", paddingLeft: "135px" }}>
              {" "}
              you many paintings from Egybt News Tel:+4373972033
            </pre>
            <br />
            <pre style={{ float: "left", paddingLeft: "140px" }}>
              all over the world
            </pre>
            <br />
            <br />
            <br />
            <br />
            <pre style={{ float: "left", paddingLeft: "550px" }}>
              ©2021 software-artists
            </pre>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

export default Footer;
