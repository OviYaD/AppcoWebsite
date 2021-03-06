import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div>
        <nav className=" NavbarItems">
          <h1 className="navbar-logo ">
            Appco <i class="fab fa-react"></i>
          </h1>

          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems.map((item, index) => {
              //console.log(item.cName, item.url, item.title);
              return (
                <li className="nav-item hover-underline-animation" key={index}>
                  <a className={item.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
