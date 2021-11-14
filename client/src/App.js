import React, { Component } from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import NavBar from "./common/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import HacktoberFest from "./pages/HacktoberFest";
import Solutions from "./pages/Solutions";
import Videos from "./pages/Videos";
import Programs from "./pages/Programs";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import "./style.css";
import './styles/global.css';
import GoogleSans from './styles/fonts/GoogleSans/GoogleSans-Medium-v1.27.ttf';

const theme = createTheme({
    typography: {
      fontFamily: [
        GoogleSans,
      ].join(','),
    }
  });
class App extends Component {

    
    render() {
        return (
            <ThemeProvider theme={theme}>

            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/events" exact component={Events}/>
                        <Route path="/programs" exact component={Programs}/>
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
            </ThemeProvider>

        );
    }
}

export default App;
