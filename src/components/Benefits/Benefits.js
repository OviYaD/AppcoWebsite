import React, { Component } from "react";
import "./Benefits.css";
import { Description } from "./Description";

class Benefits extends Component {
  render() {
    return (
      <div>
        <div className="benefit">
          <h1>
            How Can We HelpYour <br /> with Appco!
          </h1>
          <div className="container">
            <div className="row">
              {Description.map((item, index) => {
                return (
                  <div className="col-md-3 lg-3 sm-12 xs-12 box" key={index}>
                    <i className={item.icon}></i>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                );
              })}

              <div className="col-md-1 lg-1 sm-0 xs-0"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Benefits;
