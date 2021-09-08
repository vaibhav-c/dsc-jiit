import React, { Component } from "react";
import data from "../team21-22.json";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { peeps: [] };
  }
  componentDidMount() {
    //var peeps = data.members.technical.map((obj) => obj);
    this.setState({ peeps: data.members[this.props.team] });
  }
  render() {
    return (
      <div className="row">
        {this.state.peeps.map(
          ({ name, description, imglink, css_class, links: { linkedin, github, fb, twitter } }, i) => {
            let frame = (
              <div key={i} className={css_class}>
                <div className="card card-profile card-plain">
                  <div className="card-header card-avatar">
                    <a href="#pablo">
                      <img className="img" src={imglink} />
                    </a>
                  </div>
                  <div className="card-body ">
                    <h4 className="card-title">{name}</h4>
                    <h6 class="card-category text-m orange-color"></h6>
                    <p style={{ color: "teal" }}>{this.props.team === "seniors"? "" : description}</p>
                  </div>
                  <div className="card-footer justify-content-center">
                    {(linkedin != " ") ? <a
                      href={linkedin}
                      target="_blank"
                      className="btn btn-just-icon btn-link btn-linkedin"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a> : <></>}
                    {(github != " ")?<a
                      href={github}
                      target="_blank"
                      target="_blank"
                      className="btn btn-just-icon btn-link btn-github"
                    >
                      <i className="fa fa-github"></i>
                    </a>: <></>}
                    
                    {(fb!=" ")?<a
                        href={fb}
                        target="_blank"
                        className="btn btn-just-icon btn-link btn-facebook"
                      >
                        <i className="fa fa-facebook-square"></i>
            </a> : <></>   }
                    
                    {(twitter!=" ")?<a
                        href={twitter}
                        target="_blank"
                        className="btn btn-just-icon btn-link btn-twitter"
                      >
                        <i className="fa fa-twitter-square"></i>
                    </a> : <></>   }
                      
                  </div>
                </div>
              </div>
            );
            return frame;
          }
        )}
        {this.frame}
      </div>
    );
  }
}

export default Footer;
