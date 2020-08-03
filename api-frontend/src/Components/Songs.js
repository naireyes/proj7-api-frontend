import React, { Component } from "react";

export default class Songs extends Component {
  constructor(props) {
    super(props);

    this.onChangeTrackId = this.onChangeTrackId.bind(this);
    this.onChangeTrackName = this.onChangeTrackName.bind(this);
    this.onChangeTrackRating = this.onChangeTrackRating.bind(this);
    this.onChangeHasLyrics = this.onChangeHasLyrics.bind(this);
    this.onChangeAlbumName = this.onChangeAlbumName.bind(this);
    this.onChangeArtistName = this.onChangeArtistName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      songs: [],
      track_id: "",
      track_name: "",
      track_rating: "",
      has_lyrics: "",
      album_name: "",
      artist_name: "",
    };
  }

  componentDidMount() {
    let url = "https://music-api-proj6.herokuapp.com/songs";
    fetch(url)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({
            users: res.data.map((user) => user.username),
            username: res.data[0].username,
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

  onChangeTrackRating(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeHasLyrics(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeAlbumName(e) {
    this.setState({
      username: e.target.value,
    });
  }
  onChangeArtistName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const songs = {
      track_id: this.state.track_id,
      track_name: this.state.track_name,
      track_rating: this.state.track_rating,
      has_lyrics: this.state.has_lyrics,
      album_name: this.state.album_name,
      artist_name: this.state.artist_name,
    };

    console.log(songs);

    //   .post("http://localhost:5000/exercises/add", exercise)
    //   .then((res) => console.log(res.data));

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
            <label>Track Rating: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Album Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label>Artist Name: </label>
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
          </div>
        </form>
      </div>
    );
  }
}
