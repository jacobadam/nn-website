import React, { Component } from 'react';
import '../css/Homepage.css';

class Homepage extends Component {
  render() {
    return (
      <div className="homepage">
          <h1 className="homepageHeader">Neil Nevitt </h1>
          <h2 className="homepageSubHeader"> DPodM, MCPod (MChS)</h2>
          <div className="homepageCard">
            <p className="homepageText">
              Podiatrist / Chiropodist
              <br />
              Member of the College of Podiatry (Registration Number - 07675)
              <br />
              HCPC (State) Registered Podiatrist (Registration Number - CH06728)
            </p>
            <br />
            <p>Call today on 01517223840 to make your appointment</p>
          </div>
        </div>
    );
  }
}

export default Homepage;