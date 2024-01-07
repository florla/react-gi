// MEDIUM CHALLENGE:
// Replace hard-coded data with data from this.state.person in the constructor.
// Take the returned div and create a component, pass state into it, and import it as BasicInfo.

import React, { Component } from 'react';

class BasicInfo extends Component {
  render() {
    // Destructure person object from props
    const { name, number, dob, height, eyeColor } = this.props.person;
    // Render div with information passed through props
    return (
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
        <p>Date of Birth: {dob}</p>
        <p>Height: {height}</p>
        <p>Eye Color: {eyeColor}</p>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    // Set initial state with person information
    this.state = {
      person: {
        name: 'Feli',
        number: '803-203-4964',
        dob: 'June 12, 2002',
        height: "5'10",
        eyeColor: 'Brown',
      },
    };
  }

  render() {
    // Render BasicInfo component and pass state as prop
    return <BasicInfo person={this.state.person} />;
  }
}

export default App;
