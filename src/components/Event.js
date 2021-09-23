import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../Style/Event.css";
import axios from "axios";
// import Profile from "./Profile";
import Swal from "sweetalert2";
// npm install sweetalert2
export class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      NewArray: [],
    };
  }

  handelClick = async (
    
    name,
    event_description,
    event_description_image,
    date,
    ticket_price
  ) => {
   
    Swal.fire({
      position: "center",
      icon: "success",
      title: "added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });
    const requestBody = {
      name: name,
      event_description: event_description,
      event_description_image: event_description_image,
      date: date,
      ticket_price: ticket_price,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/event`, requestBody)
      .then(() => {
        console.log("addedevent");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  render() {
    return (
      <div className="div">
        {this.props.museumData.slice(0, 7).map((value) => {
          return (
            <div className="flex-container">
              <div className="body_Event">
                <Card.Body>
                  <Card.Title>{value.name}</Card.Title>
                  <br />
                  <Card.Text className="event_description">
                    {value.event_description}
                  </Card.Text>

                  <Card.Text className="event_description1">
                    {" "}
                    Date Of Event: {value.date}
                  </Card.Text>

                  <Card.Title>Ticket Price : {value.ticket_price}</Card.Title>

                  <Button
                    alt={value.id}
                  
                    onClick={() => this.handelClick(
                      value.name,
                      value.event_description,
                      value.event_description_image,
                      value.date,
                      value.ticket_price
                    )}
                    variant="primary"
                  >
                    Join The Event
                  </Button>
                </Card.Body>
              </div>
              <div className="img_Event">
                <Card.Img
                  className="img"
                  variant="top"
                  src={value.event_description_image}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default Event;
