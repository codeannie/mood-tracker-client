import React from 'react';
import LandingNavBtns from './landing-navBtns.component';

export default class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('first name ->', firstName);
    console.log('email ->', email);
    console.log('password ->', password);
  }

  render() {
    return (
      <div className="signUpForm-container">
        <LandingNavBtns />

        <form className="signUpForm" onSubmit={this.handleSubmit}>
          <label htmlFor="firstName">
          First Name:
            <input 
              type="text"
              name="firstName"
              placeholder="Enter your first name"
            />
          </label>

          <label htmlFor="email">
          E-Mail:
            <input 
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </label>

          <label htmlFor="password">
          Password:
            <input 
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </label>

          <button type="submit"> Sign Up</button>
          <button> Cancel </button> 

        </form>
      </div>
    );
  }
}
