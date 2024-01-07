// EASY CHALLENGE:
// Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. 
// Inside of ‘this.state’ create a ‘person’ property and set it to an empty object

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        person: {} 
      };
    }

  render() {
    // Render div with information from state
    return (
      <div>
        <p>Name: {this.state.person.name}</p>
        <p>Number: {this.state.person.number}</p>
        <p>Date of Birth: {this.state.person.dob}</p>
        <p>Height: {this.state.person.height}</p>
        <p>Eye Color: {this.state.person.eyeColor}</p>
      </div>
    );
  }
}

export default App;
