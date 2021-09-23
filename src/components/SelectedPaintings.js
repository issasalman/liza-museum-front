import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SelectedPaintings extends React.Component {
  render() {
    return (
      <div>
        <div className="modalDiv">
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="modalDiv">
                {" "}
                {this.props.selectedModal.name}
              </Modal.Title>
            </Modal.Header>

            <Card.Img variant="top" src={this.props.selectedModal.image_id} />

            <Modal.Body className="modalDiv">
              {this.props.selectedModal.location}
            </Modal.Body>
            <Modal.Body className="modalDiv">
              {this.props.selectedModal.artist_display}
            </Modal.Body>
            <Modal.Body className="modalDiv">
              {this.props.selectedModal.title}{" "}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={this.props.handleClose}
                className="modalDiv"
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SelectedPaintings;
