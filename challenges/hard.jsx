// HARD CHALLENGE:
// Modify the app to iterate over an array of people's basic information while still keeping the new list of contacts in the top-level of state.

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
    // Set initial state with an array of people
    this.state = {
      people: [
        {
          name: 'Feli',
          number: '803-203-4964',
          dob: 'June 12, 2002',
          height: "5'10",
          eyeColor: 'Brown',
        },
        {
            name: 'Issei',
            number: '555-1234',
            dob: 'February 20, 2000', 
            height: "5'11",
            eyeColor: 'Gold', 
          },
      ],
    };
  }

  render() {
    // Map over the people array and render BasicInfo component for each person
    return (
      <div>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
