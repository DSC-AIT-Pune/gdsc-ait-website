import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import NavBar from "./components/Navbar";
import HacktoberFest from "./pages/HacktoberFest";
import Projects from "./pages/Projects";
import bg_svg from "./styles/images/bg_svg.png";
import "./styles/style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="body">
          <NavBar />
          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/events/HacktoberFest2021" component={HacktoberFest} />
              <Route exact path="/events" component={Events} />
              <Route exact path="/core-team" component={Team} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
