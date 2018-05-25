import React from 'react';
// import { Button, Input } from 'antd';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log('email ->', email);
    console.log('password ->', password);
  }

  render() {
    return (
      <form className="loginForm" onSubmit={this.handleSubmit}>
        <label htmlFor="email">
          E-Mail:
          <input 
            type="email"
            name="email"
            placeholder="email"
          />
        </label>

        <label htmlFor="password">
          Password:
          <input 
            type="password"
            name="password"
            placeholder="password"
          />
        </label>

        <button type="submit"> Login </button>
        <button> Cancel </button> 

      </form>
    );
  }
}
