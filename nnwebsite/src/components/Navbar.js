import React, { Component } from 'react';
import '../css/Navbar.css';

class Header extends Component {
  render() {
    return (
      <div className="navBar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Me</a>
            </li>
            <li>
              <a href="/Scope">Scope of Practice</a>
            </li>
            <li>
              <a href="/location">Location</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/links">Links</a>
            </li>
          </ul>
      </div>
    );
  }
}

export default Header;