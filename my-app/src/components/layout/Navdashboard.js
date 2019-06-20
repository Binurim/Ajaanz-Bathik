import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navdashboard extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper yellow">
            <Link
              to="/"
              style={{ fontFamily: "monospace", }}
              className="col s5 brand-logo center black-text"
            >
             {/* <i className="material-icons">code</i> */}
              AJAANZ BATHIK
            </Link>
            <ul className ="right" >
            <li ><a  className ="right black-text" href="/">Home</a></li>
            <li><a className ="right black-text"  href="/about">About</a></li>
            <li ><a className ="right black-text" href="/contact">Contact</a></li>
            <li ><a className ="right black-text" href="/">Logout</a></li>
           


            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navdashboard;