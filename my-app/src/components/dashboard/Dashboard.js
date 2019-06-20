import React, { Component } from "react";
//import PropTypes from "prop-types";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    //this.props.logoutUser();
  };
  

render() {
  //const {user}  = this.props.auth;
return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
               <b>Hey there,</b> 

              <p className="flow-text grey-text text-darken-1">
                You are logged into a full-stack{" "} 
                <span style={{ fontFamily: "monospace" }}>Logged</span> In 👏
               </p> 
            </h4>

            <a 
                href={'/buy'}
                style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              BUY
            </a>
            <br/>
            <br/>

            <a 
                href={'/vieworder'}
                style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              ViewOrders
            </a>

            <br/>

           <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>




            
          </div>
        </div>
      </div>
       );




   
  }
}

export default Dashboard;