import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchMM.css";
require("dotenv").config();

const API_KEY = "";

const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";

var lyric = 
"Blinded by the light Revved up like a deuce Another runner in the night";
// "Blinded%20by%20the%20light%20Revved%20up%20like%20a%20deuce%20Another%20runner%20in%20the%20night"; //Michael Mind Project
// "I%20wanna%20dance%20with%20somebody%20I%20wanna%20feel%20the%20heat%20with%20somebody"; //Whitney Houston
// "As%20I%20went%20down%20to%20the%20river%20to%20pray%20studying%20about%20that%20good%20ol%20way"; //Allison Krauss
// "i%20was%20a%20liar%20i%20gave%20into%20the%20fire%20i%20know%20i%20should've%20fought%20it%20at%20least%20i'm%20being%20honest"; //Arianna Grande

class SearchMM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: "",
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    // this.changeFunction = this.changeFunction.bind(this);
  }


  componentDidMount() {
    console.log("componentDidMount: " + this.state.lyrics);
  }
  componentDidUpdate() {
    // this.music()
    console.log("componentDidUpdate: " + this.state.lyrics);
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  // changeFunction(event) {
  //   event.preventDefault();
  //   this.setState({ lyrics: this.state.lyrics.split(" ").join("%20")});
  //   console.log("changeFunction: " + this.state.lyrics);
  //   // this.onFormSubmit()
  // }

  onFormSubmit(event) {
    event.preventDefault();
    // this.setState({ lyrics: this.state.lyrics.split(" ").join("%20")});

    // this.changeFunction()
    // this.music()

    // var separateToIndividualStrings = this.state.lyrics.split(" ");
    // var joinSeparatedWords = separateToIndividualStrings.join("%20");
    // this.setState({ lyrics: joinSeparatedWords });

    console.log("onFormSubmit: " + this.state.lyrics);

    lyric = lyric.split(" ").join("%20");

    const MUSIX_API_URL =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      // joinSeparatedWords +
      // this.state.spokenWords +
      // this.state.lyrics +
      lyric +
      // this.setState({ lyrics: this.state.lyrics.split(" ").join("%20")}) +
      "&page_size=1&page=1&s_track_rating=desc&apikey=" +
      API_KEY;
    console.log("MusicAPI: " + MUSIX_API_URL);
    // Clear the input field
    // this.setState({
    //   lyrics: "",
    // });
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
              name="lyrics"
              // value={this.spokenWords}
              onChange={this.handleInputChange}
              value={this.state.lyrics}
            ></Form.Control>
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
