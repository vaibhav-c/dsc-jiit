import React, { Component } from "react";
import Footer from "./card";

class Members extends Component {
  render() {
    return (
      <div className="team-container team-lead-div" style={{ zIndex: 99 }}>
        <div className="red-circle circles circle1"></div>
        <div className="yellow-circle circles circle2"></div>
        <div className="red-light-circle circles circle3"></div>
        <div className="green-circle circles circle4"></div>
        <div className="green-light-circle circles circle5"></div>
        <div className="blue-light-circle circles circle6"></div>
        <div className="blue-light-circle circles circle7"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">Teacher<br/>Co-ordinator</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto mr-auto">
              <div className="card card-profile card-plain">
                <div className="card-header card-avatar">
                  <a href="#pablo">
                    <img
                      className="img"
                      src="/assets/img/coreteam/Team 2021-22/CS Mahendra Kumar Gurve.jpg"
                    />
                  </a>
                </div>
                <div className="card-body ">
                  <h4 className="card-title">Mahendra Gurve</h4>
                </div>
                <div className="card-footer justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/mahendragurve/"
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">Lead</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 ml-auto mr-auto">
              <div className="card card-profile card-plain">
                <div className="card-header card-avatar">
                  <a href="#pablo">
                    <img
                      className="img"
                      src="/assets/img/coreteam/Team 2021-22/Lead.jpg"
                    />
                  </a>
                </div>
                <div className="card-body ">
                  <h4 className="card-title">Sataskshi Garg</h4>
                </div>
                <div className="card-footer justify-content-center">
                  <a
                    href="https://www.linkedin.com/in/satakshigarg"
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-linkedin"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a
                    href="https://github.com/satakshigarg"
                    target="_blank"
                    className="btn btn-just-icon btn-link btn-github"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Senior Advisors</h2>
              </div>
            </div>
            <Footer team="seniors"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Technical Team</h2>
              </div>
            </div>
            <Footer team="technical"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Management and Public Relations Team</h2>
              </div>
            </div>
            <Footer team="management"/>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 ml-auto mr-auto text-center">
                <h2 className="title">Design Team</h2>
              </div>
            </div>
            <Footer team="design"/>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Members;
