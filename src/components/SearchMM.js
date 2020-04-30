import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "./SearchMM.css";
require("dotenv").config();

const MUSIX_API_ROOT = "https://api.musixmatch.com/ws/1.1/";
const CORS = "https://cors-anywhere.herokuapp.com/";

class SearchMM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: "",
      format: "",
      track: "",
      artist: "",
      album: "",
      url: "",
      trackID: "",
      songLyrics: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      lyrics: e.target.value,
      format: e.target.value,
    });
  };

  handleSubmit(e) {
    e.preventDefault();
    const MUSIX_API_ARTIST_INFO =
      MUSIX_API_ROOT +
      "track.search?q_lyrics=" +
      this.state.format +
      // changing the &page_size=1 to any other number will add other tracks to the json list
      // changing &page=1 to any other number will add more info to single tracks on the json list
      "&page_size=1&page=1&s_track_rating=desc&apikey=" +
      process.env.REACT_APP_MM_KEY;
    axios
      .get(CORS + MUSIX_API_ARTIST_INFO)
      .then((response) => {
        this.setState({
          track: response.data.message.body.track_list[0].track.track_name,
          artist: response.data.message.body.track_list[0].track.artist_name,
          album: response.data.message.body.track_list[0].track.album_name,
          url: response.data.message.body.track_list[0].track.track_share_url,
          trackID: response.data.message.body.track_list[0].track.track_id,
        });
        const MUSIX_API_SONG_LYRICS =
          MUSIX_API_ROOT +
          "track.lyrics.get?track_id=" +
          this.state.trackID +
          "&apikey=" +
          process.env.REACT_APP_MM_KEY;
        return axios.get(CORS + MUSIX_API_SONG_LYRICS);
      })
      .then((response) => {
        console.log(response);
        this.setState({
          songLyrics: response.data.message.body.lyrics.lyrics_body,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { track, artist, album, url, songLyrics } = this.state;
    return (
      <>
        <div>
          &nbsp; You Need At Least 10 Words To Match !!!EXACTLY!!! To Make It
          Work. &nbsp;
        </div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="lyricForm">
            <Form.Label>&nbsp; Enter Lyrics: &nbsp;</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lyrics Go Here"
              onChange={(e) =>
                this.setState({
                  lyrics: e.target.value,
                  format: e.target.value,
                })
              }
              value={this.state.lyrics}
            ></Form.Control>
            <Button
              type="submit"
              value="Submit"
              disabled={!this.state.lyrics}
              onClick={() =>
                // callback function to re-render the DOM and reformat users input for MusixMatch API
                this.setState(
                  (previous) => ({
                    format: this.state.lyrics.split(" ").join("%20") + "",
                  }),
                  console.log()
                )
              }
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
        <hr />
        <div id="trackName">{track}</div>
        <div id="artistName">{artist}</div>
        <div id="albumName">{album}</div>
        <div>{this.state.url ? <a href={url}>Link To Lyrics</a> : ""}</div>
        <div id="songLyrics">{songLyrics}</div>
      </>
    );
  }
}

export default SearchMM;
