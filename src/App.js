import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingPage from './landing-page/landing-page.component';
import Dashboard from './dashboard/dashboard.component';
import SignUpForm from './landing-page/signupForm-component';
import LoginForm from './landing-page/loginForm-component';
import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        {/* <LandingPage /> */}
        <div className="App">
          <div className="nav-buttons">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="signup"> Sign Up </Link>
              </li>
              <li>
                <Link to="login"> Login </Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>

    );
  }
}

export default App;
