import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home";
import { Artists } from "./Components/Artists";
import { Songs } from "./Components/Songs";
import { CheckPath } from "./Components/CheckPath";
import { Layout } from "./Components/Layout";
import { NaviBar } from "./Components/NaviBar";
import { Jumbotron } from "./Components/Jumbotron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NaviBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
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
