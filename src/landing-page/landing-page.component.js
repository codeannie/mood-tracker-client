import React from 'react';
import LandingContent from './landing-content.component';
import SignUpForm from './signupForm-component';
import LoginForm from './loginForm-component';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <LandingContent />
        <SignUpForm />
        <LoginForm />
      </div>
    );
  }
}
