import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./common/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import HacktoberFest from "./pages/HacktoberFest";
import Solutions from "./pages/Solutions";
import Videos from "./pages/Videos";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./style.css";
import './styles/global.css'


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/events" exact component={Events}/>
                        <Route path="/solutions" exact component={Solutions}/>
                        <Route path="/videos" exact component={Videos}/>
                        <Route path="/coreTeam" exact component={Team}/>
                        <Route path="/contact" exact component={Contact}/>
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
