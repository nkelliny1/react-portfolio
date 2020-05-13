import React, { Component } from "react";

class Contact extends Component {
    
    render() {
      return (
        <div className="container">
            <div className="about-section">
              <div className="container mainContent">
                <div className="jumbotron">
                  <h3 className="display-5">Contact</h3>
                  <hr className="my-4" />
                  <form action="mailto:nkelliny@outlook.com">
                    <div className="form-group">
                      <label for="name">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <label for="email">Email address</label>
                      <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="form-group">
                      <label for="message">Message:</label>
                      <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn" style={{backgroundColor: '#4aaaa5', color: '#fff'}}>Submit</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default Contact;
