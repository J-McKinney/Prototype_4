import React, { Component } from "react";
import "./SearchMM.css";
require("dotenv").config();

const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";

var words =
  "Blinded%20by%20the%20light%20Revved%20up%20like%20a%20deuce%20Another%20runner%20in%20the%20night";

class SearchMM extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  componentDidMount() {
    // console.log(words);
  }
  componentDidUpdate() {
    // console.log(words);
  }

  onFormSubmit(event) {
    event.preventDefault();
    const MUSIX_API_URL =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      words +
      "&page_size=10&page=1&s_track_rating=desc&apikey=" +
      process.env.API_KEY;
    console.log(MUSIX_API_URL);
  }

  render() {
    return (
      <>
        <div>You Need At Least 10 Words To Match To Make It Work!!!</div>
        <button onClick={this.onFormSubmit}>Click Here</button>
      </>
    );
  }
}

export default SearchMM;
