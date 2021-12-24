import React, { Component } from "react";
import "./Features.css";
import { Description } from "./Descriptions";

class Features extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 sm-12 xs-12 lg-4 flogo">
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/shape/xbest-features.png.pagespeed.ic.-EurwAn5bC.webp"
                alt="logo"
                width="100%"
              />
            </div>
            <div className="col-md-7 sm-12 xs-12 lg-8 ftxt">
              <h1>
                Some of our best features <br /> of our App!
              </h1>
              <div className="container-fluid">
                <div className="row">
                  {/* {Description.map((item, index) => {
                    return (
                      <div className="col-md-7">
                        <div className="col-md-1">
                          <i className={item.cName}></i>
                        </div>
                        <div className="col-md-5">
                          <h2>{item.title}</h2>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    );
                  })} */}
                  <div className="col-md-1">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div className="col-md-5">
                    <h2>Easy to Costomize</h2>
                    <p>
                      Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                    </p>
                  </div>
                  <div className="col-md-1">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div className="col-md-5">
                    <h2>Easy to Costomize</h2>
                    <p>
                      Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                    </p>
                  </div>
                  <div className="col-md-1">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div className="col-md-5">
                    <h2>Easy to Costomize</h2>
                    <p>
                      Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                    </p>
                  </div>
                  <div className="col-md-1">
                    <i class="fas fa-tools"></i>
                  </div>
                  <div className="col-md-5">
                    <h2>Easy to Costomize</h2>
                    <p>
                      Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;

/* {Description.map((item,index) =>{return (<div className="col-md-6 desc">
                    <i className={item.cName}></i>
                  </div>)})} */
