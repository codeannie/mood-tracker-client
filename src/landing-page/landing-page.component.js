import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LandingContent from './landing-content.component';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <LandingContent />
      </div>
    );
  }
}
