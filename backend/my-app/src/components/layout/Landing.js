import React, { Component } from "react";
import Limage from './Limage.jpg';

class Landing extends Component {
  render() {
    return (
      
      <div >
      
        <div className="row" >
        
        <img src={Limage} alt="Limage" styles = { {backgroundImage: `url(${ Limage.jpg })` ,  flex: 1,
          resizeMode: 'cover',
          backgroundRepeat  : 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          margin:'0'}}/>

          <div className="col s12 center-align">
         
            <h4>
              Bathiks By {" "}
              <span style={{ fontFamily: "monospace" }}>AjaanZ</span> 
            </h4>
            <p className="flow-text grey-text text-darken-1" >
              Get Design your customized Bathik Wear from us !
            </p>
            <br />
           
            <a 
                href={'/register'}
                style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Register
            </a>
            <a
               href={'/login'}
                style={{
                marginLeft: "2rem",
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect white hoverable black-text"
            >
              Log In
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;