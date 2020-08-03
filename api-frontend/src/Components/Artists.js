import React from "react";
import styled from "styled-components";
const Styles = styled.div`
  h2 {
    margin-left: 35%;
    padding-bottom: 5%;
    padding-top: 5%;
  }
  button {
    margin-left: 45%;
    margin-top: 1em;
  }

  li {
    font-size: 1.3em;
    margin-left: 35%;
  }
`;

class Artists extends React.Component {
  state = {
    artists: [],
  };

  componentDidMount() {
    let url = "https://music-api-proj6.herokuapp.com/artist";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.length > 0) {
          this.setState({
            artists: res.map((artist, index) => artist.artist.artist_name),
          });
        }
      })
      .catch(() => {
        alert("Error retrieving data!!!");
      });
  }

  render() {
    return (
      <Styles>
        <div>
          <h2>Top Artists of the Day!</h2>
          <ol>
            {/* <li>{this.state.artists}</li> */}
            <li>Taylor Swift</li>
            <li>"Jawsh 685 feat. Jason Derulo"</li>
            <li>Morgan Wallen</li>
            <li>Luke Combs</li>
            <li>Maroon 5</li>
            <li>Harry Styles</li>
            <li>Megan Thee Stallion</li>
            <li>DaBaby feat. Roddy Ricch</li>
            <li>Blake Shelton</li>
            <li>DJ Khaled feat. Drake, Lil Wayne and Rick Ross</li>
          </ol>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </Styles>
    );
  }
}

export default Artists;
