import React, { Component } from "react";
import "./ScreenshotPage.css";

class ScreenshotPage extends Component {
  render() {
    return (
      <div className="ss">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 lg-5 sm-12 xs-12 stxt">
              <h2>
                Applic Apps <br /> Screenshot
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consecadipiscing elit, sed do
                eiusmod tempor incididunt ut ore et dolore magna aliqua. Quis
                ipsum suspendisse gravida. Risus commodo viverra maecenasan
                lacus vel facilisis.
              </p>
            </div>
            <div className="col-md-7 lg-7 sm-12 xs-12 simg">
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
              <img
                class="img-fluid"
                src="https://preview.colorlib.com/theme/appco/assets/img/gallery/xApp2.png.pagespeed.ic.JbwxSe9pMq.webp"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScreenshotPage;
