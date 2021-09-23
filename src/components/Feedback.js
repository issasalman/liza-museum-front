import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import FeedbackForm from "./feedbackForm";
import "../css/feedback.css";

class FeedBackPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbacks: [],
    };
  }
  //========================= this function calls the render fun. first then excutes.
  componentDidMount = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/feedback`)
      .then((feedBackResponse) => {
        this.setState({ feedbacks: feedBackResponse.data });
      });
  };

  //================== Form Submit:====================================

  formSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      name: e.target.name.value,
      feedBackMessage: e.target.feedback.value,
      gender: this.props.genderr,
    };

    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/feedback`, requestBody)
      .then((feedBackResponse) => {
        this.state.feedbacks.push(feedBackResponse.data); // to prevent data lose.
        this.setState({
          feedbacks: this.state.feedbacks,
        });
      });

    location.reload();
  };

  render() {
    console.log("Gender :", this.props.genderr);
    return (
      <div>
        <div className="row">
          <div className="column1">
            <div>
              <FeedbackForm
                formSubmit={this.formSubmit}
                gendarHandel={this.props.gendarHandel}
              />
            </div>
          </div>
          <div className="column2">
            <h2 id="co2Text">
              Your feedback is important to us , feel free to say anything about
              our website!
            </h2>
            <Card.Img
              style={{
                marginTop: "20px",
                marginRight: "auto",
                marginLeft: "auto",
                width: "20rem",
                height: "20rem",
              }}
              variant="top"
              src="https://techcrunch.com/wp-content/uploads/2015/04/feedback.jpg?w=1390&crop=1"
            />
          </div>
        </div>
        <div>
          {this.state.feedbacks.length > 0 && (
            <>
              {this.state.feedbacks.map((feedback) => {
                console.log("feef", feedback.gender);
                return (
                  <div  id="cardFeedback">
                    <Card className="feedCard"
                      style={{
                        width: "12rem",
                        height: "15rem",
                        margin: "auto",
                      }}
                    >
                      {feedback.gender === "Male" ? (
                        <Card.Img
                          style={{
                            marginRight: "auto",
                            marginLeft: "auto",
                            width: "5rem",
                            height: "5rem",
                          }}
                          variant="top"
                          src="https://sdmny.hunter.cuny.edu/wp-content/uploads/2017/04/male-headshot-placeholder.jpg"
                        />
                      ) : (
                        <Card.Img
                          style={{
                            alignContent: "center",
                            marginRight: "auto",
                            marginLeft: "auto",
                            width: "5rem",
                            height: "5rem",
                          }}
                          variant="top"
                          // src="https://via.placeholder.com/120px150"
                          src="https://www.cirquebijou.co.uk/wp-content/uploads/2016/12/placeholder-female1.jpg"
                        />
                      )}
                      <Card.Body>
                        <Card.Title
                          style={{
                            borderBottom: "2px solid black",
                          }}
                        >
                          {feedback.name}
                        </Card.Title>
                        <Card.Text> {feedback.feedBackMessage} </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    );
  }
}

export default FeedBackPage;
