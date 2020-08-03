import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import Artists from "./Components/Artists";
// import { Songs } from "./Components/Songs";
import Songs from "./Components/Songs";
import { CheckPath } from "./Components/CheckPath";
import { Layout } from "./Components/Layout";
import { NaviBar } from "./Components/NaviBar";
// import { Jumbotron } from "./Components/Jumbotron";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    let url = "https://music-api-proj6.herokuapp.com/songs";
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let songs = [];
        for (let i = 0; i < res.length; i++) {
          songs.push(res[i].track.track_name);
        }
      });
    // this.setState({
    //   songs: songs.track.track_name,
    //   isLoaded: true,
    // });

    // componentDidUpdate() {
    //   console.log({});
    // }
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NaviBar />
          <Route exact path="/" component={Home} />
          <Layout>
            <Switch>
              <Route path="/Artists" component={Artists} />
              <Route path="/Songs" component={Songs} />
              <Route component={CheckPath} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
