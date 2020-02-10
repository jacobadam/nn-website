import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./Header";
import Footer from "./Footer";
import Homepage from "./Homepage";
import About from "./About";
import Scope from "./Scope";
import Contact from "./Contact";
import Location from "./Location";
import Links from "./Links";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>NN Website</h1>
            <Header/>
          <Router>
            <Homepage path="/"/>
            <About path="/about"/>
            <Scope path="/scope"/>
            <Contact path="/contact"/>
            <Location path="/location"/>
            <Links path="/links"/>
          </Router>
            <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
