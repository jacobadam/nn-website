import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Scope from "./components/Scope";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Links from "./components/Links";
class App extends Component {
  render() {
    return (
      <div className="App" >
        <header className="App-header">
            <Navbar/>
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
