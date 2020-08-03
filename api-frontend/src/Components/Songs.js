import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const Styles = styled.div`
  h2 {
    margin-left: 35%;
    padding-bottom: 5%;
    padding-top: 5%;
  }

  li {
    font-size: 1.3em;
    margin-left: 35%;
  }
`;

export default class Songs extends Component {
  constructor(props) {
    super(props);

    this.onChangeTrackId = this.onChangeTrackId.bind(this);
    this.onChangeTrackName = this.onChangeTrackName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      songs: [],
      track_id: "",
      track_name: "",
    };
  }

  componentDidMount() {
    let url = "https://music-api-proj6.herokuapp.com/songs";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.length > 0) {
          this.setState({
            songs: res.map((song) => console.log(song.track.track_name)),
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeTrackId(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeTrackName(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const songs = {
      track_id: this.state.track_id,
      track_name: this.state.track_name,
    };

    console.log(songs);

    axios
      .post("https://music-api-proj6.herokuapp.com/songs", songs)
      .then((res) => console.log(res.data));

    window.location = "/songs";
  }

  render() {
    return (
      <div>
        <h3>Create New Song</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Track ID: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeTrack_I}
            />
          </div>
          <div className="form-group">
            <label>Track Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Submit New Song"
              className="btn btn-primary"
            />
            {/* <h3>Songs List</h3> */}
            <p>{this.state.songs}</p>
          </div>
        </form>
        <Styles>
          <div>
            <h2>Top Songs of the Day!</h2>
            <ol>
              {/* <li>{this.state.artists}</li> */}
              <li>the 1</li>
              <li>Happy Anywhere (feat. Gwen Stefani)</li>
              <li>Nobody's Love</li>
              <li>Savage Love (Laxed - Siren Beat)</li>
              <li>One Margarita</li>
              <li>Blinding Lights</li>
              <li>exile (feat. Bon Iver)</li>
              <li>Patience</li>
              <li>Roses - Imanbek Remix</li>
              <li>cardigan</li>
            </ol>
          </div>
        </Styles>
      </div>
    );
  }
}
