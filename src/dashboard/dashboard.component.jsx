import React from 'react';
import MoodForm from './mood-form.component';

const WelcomeBlurb = (props) => {
  return (
    <div className="welcomeBlurb">
      <h2> Welcome, User </h2>
      <h3> How's your mood? </h3>
    </div> 
  );
};

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
        <WelcomeBlurb />
        <MoodForm />
      </div>
    );
  }
}
