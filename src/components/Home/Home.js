import React, { Component } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid home-bg">
          <div className="row">
            <div className="col-lg-6 md-6 sm-12 xm-12 home-txt">
              <p>APP LANDING PAGE</p>
              <h1>Get Things Done with Appco</h1>
              <p className="guid">
                Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                eiusm tempor incididunt ulabore et Idolore magna aliqua.
              </p>
              <button className="btn">Download</button>
              <button className="play">
                <i class="fas fa-play"></i>
              </button>
            </div>
            <div className="col-lg-6 md-6 sm-12 xm-12 logo">
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/hero/xhero_right.png.pagespeed.ic.GkpyOQDTCI.webp"
                alt="logo"
                width="800"
                height="100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
