import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NavBar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <Switch>
                        <Route path="/" component={Home}/>
                    </Switch>
                </main>
            </React.Fragment>
        )
    }
}

export default App;
