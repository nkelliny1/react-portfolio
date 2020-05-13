import React, { Component } from "react";
import covid from './images/coronavirus.jpg';
import dayplanner from './images/dayplanner.jpg';
import fitness from './images/fitness.jpg';
import notes from './images/notes.jpg';
import weather from './images/weather.jpg';

class Portfolio extends Component {
    
    render() {
      return (
        <div className="container">
            <div className="about-section">
                <h1 className="about-header">Portfolio</h1>
                <hr className="about-div" />
                <div className="row">
                  <div className="col-md-3">
                   <a href="http://covidexchange.herokuapp.com/" target="_blank">
                    <div className="card" style={{width: '102px'}}>
                      <img src={covid} height="100" width="100"></img>
                      <div className="portfolio-desc">
                        <p>Covid Exchange</p>
                      </div>
                    </div>
                      </a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://nkelliny1.github.io/day-planner/" target="_blank">
                    <div className="card" style={{width: '102px'}}>
                      <img className="profile-img" src={dayplanner} height="100" width="100"></img>
                      <div className="portfolio-desc">
                        <p>Day Planner</p>
                      </div>
                    </div>
                      </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                      <a href="https://nkelliny1.github.io/weather-dashboard/" target="_blank">
                    <div className="card" style={{width: '102px'}}>
                      <img src={weather} height="100" width="100"></img>
                      <div className="portfolio-desc">
                        <p>Weather Dashboard</p>
                      </div>
                    </div>
                      </a>
                  </div>
                  <div className="col-md-3">
                      <a href="https://github.com/nkelliny1/note-taker" target="_blank">
                    <div className="card" style={{width: '102px'}}>
                      <img className="profile-img" src={notes} height="100" width="100"></img>
                      <div className="portfolio-desc">
                        <p>Note Taker</p>
                      </div>
                    </div>
                      </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3">
                      <a href="https://nkelliny1.github.io/NutriFit/index.html" target="_blank">
                    <div className="card" style={{width: '102px'}}>
                      <img src={fitness} height="100" width="100"></img>
                      <div className="portfolio-desc">
                        <p>Nutrifit</p>
                      </div>
                    </div>
                      </a>
                  </div>
                </div>
                </div>
            </div>
      );
    }
  }
  
  export default Portfolio;