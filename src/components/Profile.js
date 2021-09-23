import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "../Style/Profile.css";
import axios from "axios";
import Button from "react-bootstrap/Button";

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myEvents: [],
      myPaints: [],
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/event`).then((eventResp) => {
      this.setState({ myEvents: eventResp.data });
    });

    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/paints`)
      .then((paintResp) => {
        this.setState({ myPaints: paintResp.data });
      });
  };

  deleteEvent = (name) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/event/${name}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newEvents = this.state.myEvents.filter(
            (event) => event.name !== name
          );

          this.setState({ myEvents: newEvents });
        }
        window.location.reload();
      })
      .catch(() => alert("Error deleting"));
  };

  deletePaints = (name) => {
    axios
      .delete(`${process.env.REACT_APP_SERVER_URL}/paints/${name}`)
      .then((deleteResponse) => {
        if (deleteResponse.data.deletedCount === 1) {
          const newPaints = this.state.myPaints.filter(
            (paint) => paint.name !== name
          );

          this.setState({ myPaints: newPaints });
        }
        window.location.reload();
      })
      .catch(() => alert("Error deleting"));
  };

  render() {
    const condetionForPanting = this.state.myPaints.length;
    const condetionForEvent = this.state.myEvents.length;
    console.log(condetionForPanting);
    return (
      <div>
        {condetionForPanting === 0 ? (
          <div>
            <h3 id="h3FavProfileDiv"> Favorite Paintings List ❤️</h3>
            <div class="d-flex justify-content-center">
              <div id="profileDiv">
                <Card
                  style={{
                    width: "25rem",
                    height: "150px",
                    marginRight: "88px",
                  }}
                >
                  {/* <Card.Img
                        variant="top"
                        src={item.image_id}
                        alt="paint image"
                        id="profilePaintingImage"
                      /> */}
                  <Card.Body>
                    <Card.Title> favorite paintings</Card.Title>
                    {/* <Card.Text> Metropolitan Museum of art</Card.Text> */}
                    <Card.Text>
                      {" "}
                      you should choose from Collections page your favorite
                      paintings
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h3 id="h3FavProfileDiv"> Favorite Paintings List ❤️</h3>
            {this.state.myPaints.map((item) => {
              return (
                <div>
                  <div id="profileDiv">
                    <Card style={{ width: "22rem" }}>
                      <Card.Img
                        variant="top"
                        src={item.image_id}
                        alt="paint image"
                        id="profilePaintingImage"
                      />
                      <Card.Body>
                        <Card.Title> {item.name}</Card.Title>
                        <Card.Text> {item.location}</Card.Text>
                        <Card.Text> {item.title}</Card.Text>
                        <Button
                          onClick={() => this.deletePaints(item.name)}
                          variant="danger"
                        >
                          Delete Painting
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        {condetionForEvent === 0 ? (
          <div>
            <h3 className="EventTitle"> Selected Event</h3>
            <div class="d-flex justify-content-center">
              <Card style={{ width: "90%" }}>
                {/* <Card.Img
                      variant="top"
                      src={value.event_description_image}
                    /> */}
                <Card.Body>
                  <Card.Title>Event</Card.Title>
                  <Card.Text>
                    you should choose from Event page your event
                  </Card.Text>
                  <Card.Text className="event_description">
                    {" "}
                    Date Of Event: didn't set
                  </Card.Text>

                  <Card.Title>Ticket Price : didn't set </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="EventTitle"> Selected Event</h3>
            {this.state.myEvents.map((value) => {
              return (
                <div class="d-flex justify-content-center">
                  <Card style={{ width: "90%" }}>
                    <Card.Img
                      variant="top"
                      src={value.event_description_image}
                    />
                    <Card.Body>
                      <Card.Title>{value.name}</Card.Title>
                      <Card.Text>{value.event_description}</Card.Text>
                      <Card.Text className="event_description">
                        {" "}
                        Date Of Event: {value.date}
                      </Card.Text>

                      <Card.Title>
                        Ticket Price : {value.ticket_price}
                      </Card.Title>
                      <Button
                        onClick={() => this.deleteEvent(value.name)}
                        variant="danger"
                      >
                        Delete Event
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default Profile;
