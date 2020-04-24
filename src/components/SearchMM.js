import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchMM.css";
require("dotenv").config();

const API_KEY = "";

const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";

// var spokenWords =  //"";
// "Blinded by the light Revved up like a deuce Another runner in the night";
// "Blinded%20by%20the%20light%20Revved%20up%20like%20a%20deuce%20Another%20runner%20in%20the%20night"; //Michael Mind Project
// "I%20wanna%20dance%20with%20somebody%20I%20wanna%20feel%20the%20heat%20with%20somebody"; //Whitney Houston
// "As%20I%20went%20down%20to%20the%20river%20to%20pray%20studying%20about%20that%20good%20ol%20way"; //Allison Krauss
// "i%20was%20a%20liar%20i%20gave%20into%20the%20fire%20i%20know%20i%20should've%20fought%20it%20at%20least%20i'm%20being%20honest"; //Arianna Grande

class SearchMM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spokenWords: "",
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.state.spokenWords);
  }
  componentDidUpdate() {
    // console.log(this.state.spokenWords);
  }

  handleInputChange = (event) => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit(event) {
    event.preventDefault();
    this.setState({
      spokenWords: "",
    });

    // var separateToIndividualStrings = this.state.spokenWords.split(" ");
    // var joinSeparatedWords = separateToIndividualStrings.join("%20");
    // console.log(joinSeparatedWords);

    const MUSIX_API_URL =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      this.state.spokenWords +
      // joinSeparatedWords + // this needs to be a string in order to make the call
      "&page_size=10&page=1&s_track_rating=desc&apikey=" +
      API_KEY;
    console.log(MUSIX_API_URL);
    this.separateFunction();
  }

  separateFunction() {
    var separateToIndividualStrings = this.state.spokenWords.split(" ");
    var joinSeparatedWords = separateToIndividualStrings.join("%20");
    console.log(joinSeparatedWords);
  }

  render() {
    return (
      <>
        <div>
          &nbsp; You Need At Least 10 Words To Match !!!EXACTLY!!! To Make It
          Work. &nbsp;
        </div>
        <Form>
          <Form.Group controlId="lyricForm">
            <Form.Label>&nbsp; Enter Lyrics &nbsp;</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lyrics Go Here"
              name="spokenWords"
              onChange={this.handleInputChange}
              value={this.state.spokenWords}
            />
            <Button variant="primary" type="submit" onClick={this.onFormSubmit}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default SearchMM;
