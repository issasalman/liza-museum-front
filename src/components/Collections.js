import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import "../index.css";
import Form from "react-bootstrap/Form";
import SelectedPaintings from "./SelectedPaintings";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import "../Style/collectionForm.css";

export class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      museumName: "",
      museumData: [],
      filterMuseumData: [],
      data: [],
      selectedData: [],
      show: false,
      selectedID: "",
      selectedModal: {},
      addToFavorite: [],
      favItem: "",
      allFilteredFavArray: [],
    };
  }

  componentDidMount = async () => {
    const serverUrl = "http://localhost:3020/paintings";
    const serverResponse = await axios.get(serverUrl);

    this.setState({
      museumData: serverResponse.data,
      filterMuseumData: serverResponse.data,
      data: serverResponse.data,
    });
  };
  filterMuseum = (event) => {
    let value = event.target.value;
    let filteredArray;

    filteredArray = this.state.museumData.filter((element) => {
      if (element.id === value) {
        return value;
      } else if (value === "0") {
        return this.state.museumData;
      }
    });

    this.setState({
      filterMuseumData: filteredArray,
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = (data) => {
    this.setState({
      show: true,
      selectedData: data,
    });
  };

  handelClick = async (e) => {
    await this.handleShow(this.state.selectedData);
    await this.setState({
      selectedID: e.target.src,
    });
    let selectedItem = [];

    selectedItem = this.state.filterMuseumData.find(
      (value) => value.image_id === this.state.selectedID
    );

    this.setState({
      selectedModal: selectedItem,
    });
  };

  addingToFav = async (name, location, title, image_id) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "added to favorite",
      showConfirmButton: false,
      timer: 1500,
    });
    const requestBody = {
      name: name,
      location: location,
      title: title,
      image_id: image_id,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/paints`, requestBody)
      .then(() => {
        console.log("addedPaints");
      })
      .catch((error) => {
        console.log("error", error.message);
      });

    // ********************************************************************
    

    // ********************************************************************
  };

  render() {
    return (
      <div>
        <div id="topImageDiv">
          <img
            src="https://i.pinimg.com/originals/c1/fd/f9/c1fdf992b56731c0e637bfea45f78f44.gif"
            alt=""
            id="topImage"
          />
        </div>

        <div id="formDiv">
          <Form className="selectForm">
            <Form.Label>
              Select a museum to see all paintings from the same museum{" "}
            </Form.Label>

            <span onChange={this.filterMuseum} class="custom-dropdown big">
              <select>
                <option value="0"> select museum name </option>
                <option value="Louvre"> Louvre Museum </option>
                <option value="THE_PRADO"> The Prado Museum </option>
                <option value="THE_VATICAN_MUSEUMS">
                  {" "}
                  The Vatican Museum{" "}
                </option>
                <option value="THE_STATE_HERMITAGE_MUSEUM">
                  {" "}
                  The State Hermitage Museum{" "}
                </option>
                <option value="THE_UFFIZI_GALLERIES">
                  {" "}
                  The UFFIZI Galleries{" "}
                </option>
                <option value="Metropolitan_Museum_of_art">
                  {" "}
                  Metropolitan Museum of art{" "}
                </option>
                <option value="THE_BRITISH_MUSEUM"> The British Museum </option>
              </select>
            </span>
          </Form>
        </div>
        <div>
          {this.state.filterMuseumData.map((item) => {
            return (
              <div id="paintingDiv">
                <Card style={{ width: "22rem" }}>
                  <Card.Img
                    variant="top"
                    src={item.image_id}
                    alt="paint image"
                    onClick={this.handelClick}
                    id="image"
                  />
                  <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text> {item.location}</Card.Text>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        this.addingToFav(
                          item.name,
                          item.location,
                          item.title,
                          item.image_id
                        );
                      }}
                      name={item.image_id}
                      id="collectionButton"
                    >
                      {" "}
                      Add to Favorite ❤️
                    </Button>
                  </Card.Body>
                </Card>
                <SelectedPaintings
                  show={this.state.show}
                  handleClose={this.handleClose}
                  selectedData={this.state.filterMuseumData}
                  selectedID={this.state.selectedID}
                  selectedModal={this.state.selectedModal}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collections;
