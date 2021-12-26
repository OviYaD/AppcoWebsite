import React, { Component } from "react";
import "../Styles.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 cimg ">
              <img
                className="rotate"
                src="https://preview.colorlib.com/theme/appco/assets/img/shape/xsay-shape-left.png.pagespeed.ic.lpmVustF7k.webp"
                alt="logo"
                width="100px"
              />
            </div>
            <div className="col-md-4 sm-12 xs-12 lg-4 ctxt">
              <h1>Say Hello To The Collaboration Hub.</h1>
            </div>
            <div className="col-md-6 sm-12 xs-12 lg-6 cbtn">
              <button className="btn">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
