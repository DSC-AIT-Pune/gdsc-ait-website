import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import insta from "./images/insta.png";
import bg_svg from "./images/bg_svg.png";
import Team from "./pages/Team";
import Events from "./pages/Events";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <NavBar />
          <img src={bg_svg} alt="" className="bg_svg" />
          <main className="container">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Team_Members">
                <Team />
              </Route>
              <Route exact path="/Schedule">
                <Events />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
