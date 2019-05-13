import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import about from "./components/about";
import contact from "./components/contact";
import Dashboard from "./components/dashboard/Dashboard";




class App extends Component {
  render() {
    return (
      <Router>
     
          <div className="App">
            <Navbar />
           
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />  
          {/* at localhost:3000/register, render the Register component. */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={about} />
          <Route exact path="/contact" component={contact} />

          {/* <Switch> */}
              <Route exact path="/dashboard" component={Dashboard} />
            {/* </Switch> */}

         
             
                
          </div>
          </Router>
        
    );
  }
}
export default App;