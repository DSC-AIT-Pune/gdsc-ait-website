import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import HacktoberFest from "./pages/HacktoberFest";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";

import "./style.css";


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/events" exact component={Events}/>
                        <Route path="/projects" exact component={Projects}/>
                        <Route path="/coreTeam" exact component={Team}/>
                        <Route path="/hacktoberFest" exact component={HacktoberFest}/>
                        <Route path="/notFound" component={NotFound}/>
                        <Redirect to="/notFound"/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
