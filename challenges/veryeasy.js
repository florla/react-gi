// VERY EASY CHALLENGE:
//  Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. 
// This div should be hard-coded to prepare for the Medium Challenge.

import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <p>Name: Feli</p>
        <p>Number: 803-203-4964</p>
        <p>Date of Birth: June 12, 2002</p>
        <p>Height: 5'10</p>
        <p>Eye Color: Brown</p>
      </div>
    );
  }
}

export default App;
