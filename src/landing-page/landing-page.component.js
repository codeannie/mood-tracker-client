import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingContent from './landing-content.component';
import SignUpForm from './signupForm-component';
import LoginForm from './loginForm-component';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <Router>
        <div className="landing-page">
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

          <Route exact path="/" component={LandingContent} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          
        </div>
      </Router>
    );
  }
}
