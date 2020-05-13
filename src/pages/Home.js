import React, { Component } from "react";
import me from './images/me.jpg';

class Home extends Component {
    
    render() {
      return (
        <div>
          <div className="container">
              <div className="about-section">
                <div className="container mainContent">
                  <div className="jumbotron">
                    <h3 className="display-5">About Me</h3>
                    <hr className="my-4" />
                    <img className="profile-img" src={me} height="100" width="100"></img>
                    <p>I am a developer who provides services to clients and other companies such as design, development, and integration of systems and software applications. Through all the experience that I have had, I have an understanding for not only the development of products and the production, but also the business side of development and web applications development.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }
  
  export default Home;