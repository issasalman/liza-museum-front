import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../css/feedback.css";

class FeedBackForm extends React.Component {
  handel = (e) => {
    e.preventDefault();

    this.props.gendarHandel(e.target.value);
    console.log("sdds", e.target.value);
  };

  render() {
    // console.log(this.state.gender);
    return (
      <div id="formD">
        <Form className="Form" onSubmit={this.props.formSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="FormLabels">User Name:</Form.Label>
            <Form.Control
              required
              type="text"
              name="name"
              placeholder="Enter your first and last name"
            />
            <br />
            <Form.Control as="select" onChange={this.handel}>
              <option value="default">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Control>
            <br />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="FormLabels">Feedback:</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={6}
              name="feedback"
              placeholder="Write down your feedback message in this box...."
            />
          </Form.Group>
          <Button className="feedBackButton" variant="warning" type="submit">
            Submit your feedback
          </Button>
        </Form>
      </div>
    );
  }
}

export default FeedBackForm;
