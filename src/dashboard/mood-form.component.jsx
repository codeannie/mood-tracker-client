import React from 'react';
import MOODS from '../enums/mood.constants';

export default class MoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   
      // set default mood?
      mood: {
        id: MOODS.NORMAL.id,
        label: MOODS.NORMAL.label,
      },
      notes: '',
    };
    
    this.handleMoodChange = this.handleMoodChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateMoodOptions = () => {
    const moodOptions = [];
    
    for (const key in MOODS) {
      const moodOption = <option data-label={MOODS[key].label} key={MOODS[key].id} value={MOODS[key].id}> {MOODS[key].label} </option>;
      moodOptions.push(moodOption);
    }
    console.log('mood options ->', moodOptions);
    console.log('mapping ->', Object.keys(MOODS).map(key => (
      <option value={MOODS[key].id}>{MOODS[key].label}</option>
    )));
    return moodOptions;
  }

  // generateMoods = () => {
  //   Object.keys(MOODS).map(key => (
  //     <option value={MOODS[key].id}>{MOODS[key].label}</option>
  //   ));
  // }

  handleMoodChange(e) {
    // const { mood } = this.state;
    const id = e.target.value;
    // const label = e.currentTarget.data.label;
    console.log('id change', id);
    console.log('label', e.target.dataset.label);

    this.setState({
      mood: {
        // ...mood,
        id,
        // label,
      },
    });

    console.log('state on change ->', this.state);
  }

  // add separate handlechange for text area
  handleSubmit(e) {
    e.preventDefault();
    // do something to sent to API
    console.log('state on submit ->', this.state);
  }

  render() {
    const generateMoods = 
    Object.keys(MOODS).map(key => (
      <option value={MOODS[key].id}>{MOODS[key].label}</option>
    ));

    return (
      <div className="moodForm-container">
        <form className="moodForm" onSubmit={this.handleSubmit}>
          <label htmlFor="mood">
          Current Mood:
            <select value={this.state.mood} onChange={this.handleMoodChange}>
              {this.generateMoodOptions()}
              {/* {this.generateMoods()} */}
              {/* {generateMoods} */}
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
