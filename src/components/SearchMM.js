import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./SearchMM.css";
require("dotenv").config();

const API_KEY = "";

const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";

// var lyric =
// "Blinded by the light Revved up like a deuce Another runner in the night";
// "Blinded%20by%20the%20light%20Revved%20up%20like%20a%20deuce%20Another%20runner%20in%20the%20night"; //Michael Mind Project
// "I%20wanna%20dance%20with%20somebody%20I%20wanna%20feel%20the%20heat%20with%20somebody"; //Whitney Houston
// "As%20I%20went%20down%20to%20the%20river%20to%20pray%20studying%20about%20that%20good%20ol%20way"; //Allison Krauss
// "i%20was%20a%20liar%20i%20gave%20into%20the%20fire%20i%20know%20i%20should've%20fought%20it%20at%20least%20i'm%20being%20honest"; //Arianna Grande

class SearchMM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: "",
      form: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount:lyrics " + this.state.lyrics);
    console.log("componentDidMount:form " + this.state.form);
  }
  componentDidUpdate() {
    // this.music()
    console.log("componentDidUpdate:lyrics " + this.state.lyrics);
    console.log("componentDidUpdate:form " + this.state.form);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount:lyrics " + this.state.lyrics);
    console.log("componentWillUnmount:form " + this.state.form);
  }

  handleChange = (e) =>
    this.setState({
      lyrics: e.target.value,
      form: e.target.value,
    });

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit lyrics: " + this.state.lyrics);
    console.log("handleSubmit form: " + this.state.form);
    const MUSIX_API_URL =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      // joinSeparatedWords +
      // this.state.spokenWords +
      // this.state.lyrics +
      this.state.form +
      // lyric +
      // this.setState({ lyrics: this.state.lyrics.split(" ").join("%20")}) +
      "&page_size=1&page=1&s_track_rating=desc&apikey=" +
      API_KEY;
    console.log("MusicAPI: " + MUSIX_API_URL);
  }

  onFormSubmit(e) {
    e.preventDefault();
    //   this.setState({ lyrics: this.state.lyrics.split(" ").join("%20")});
    // this.setState({ form: this.state.lyrics.split(" ").join("%20") });
    console.log("onFormSubmit:lyrics " + this.state.lyrics);
    console.log("componentDidUpdate:form " + this.state.form);

    // Clear the input field
    // this.setState({
    //   lyrics: "",
    // });
  }

  render() {
    const { state } = this;
    return (
      <>
        <div>
          &nbsp; You Need At Least 10 Words To Match !!!EXACTLY!!! To Make It
          Work. &nbsp;
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="lyricForm">
            <Form.Label>&nbsp; Enter Lyrics &nbsp;</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lyrics Go Here"
              // value={this.spokenWords}
              onChange={(e) =>
                this.setState({
                  lyrics: e.target.value,
                  form: this.state.lyrics.split(" ").join("%20"),
                })
              }
              value={state.lyrics}
            ></Form.Control>
            <Button type="submit" value="Submit">
              Submit
            </Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default SearchMM;
