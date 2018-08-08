import React from 'react';
import MOODS from '../enums/mood.constants';

export default class MoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
      // capture selected mood?
      mood: {
        id: '',
        label: '',
      },
      notes: '',
    };
    
    this.generateMoodOptions = this.generateMoodOptions.bind(this);
    this.handleChange = this.handleMoodChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateMoodOptions() {
    const moodOptions = [];
    const moodKeys = Object.keys(MOODS);
    console.log('mood keys ->', moodKeys);
    // need to loop through object to generate list of options
    const moodOption = <option data-name={moodKeys.label} value={moodKeys.id}> {moodKeys.label} </option>;
    moodOptions.push(moodOption);
  }

  handleMoodChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(({
      // store the mood or notes 
      [name]: value,
    }));

    console.log('state on change ->', this.state);
  }

  // add separate handlechange for text area
  handleSubmit(e) {
    e.preventDefault();
    // do something to sent to API
    console.log('state on submit ->', this.state);
  }

  render() {
    return (
      <div className="moodForm-container">
        <form className="moodForm" onSubmit={this.handleSubmit}>
          <label htmlFor="mood">
          Current Mood:
            <select value={this.state.mood} onChange={this.handleMoodChange}>
              {this.generateMoodOptions}
              {/* <option value={MOODS.NORMAL.id} > {MOODS.NORMAL.label} </option>
              <option value={MOODS.HAPPY.id} > {MOODS.HAPPY.label} </option>
              <option value={MOODS.PRODUCTIVE.id} > {MOODS.PRODUCTIVE.label} </option>
              <option value={MOODS.ANNOYED.id} > {MOODS.ANNOYED.label} </option>
              <option value={MOODS.SAD.id} > {MOODS.SAD.label} </option>
              <option value={MOODS.STRESSED.id} > {MOODS.STRESSED.label} </option>
              <option value={MOODS.SICK.id} > {MOODS.SICK.label} </option>
              <option value={MOODS.ANGRY.id} > {MOODS.ANGRY.label} </option> */}
            </select>

          </label>
          <label htmlFor="notes">
            <textarea 
              value={this.state.notes}
              // onChange={this.handleChange} 
            />
          </label>

          <button type="submit"> Add Mood </button>
          <button> Cancel </button>
        </form>
      </div>
    );
  }
}
