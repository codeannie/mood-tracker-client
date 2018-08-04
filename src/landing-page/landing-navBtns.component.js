import React from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// import SignUpForm from './signupForm-component';
// import LoginForm from './loginForm-component';

const LandingNavBtns = () => (
  <section className="nav-buttons">
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
    {/* <Route exact path="/signup" component={SignUpForm} />
    <Route exact path="/login" component={LoginForm} /> */}
  </section>
);

export default LandingNavBtns;
