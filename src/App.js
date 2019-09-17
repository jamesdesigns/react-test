// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'James', age: 34},
      { name: 'Linda', age: 24},
      { name: 'JJ', age: 2}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // Don't DO THIS ---- this.state.persons[0].name = 'Jimmy';
    this.setState( {
      persons: [
        { name: 'Jimmy', age: 34 },
        { name: 'Linda', age: 24 },
        { name: 'JJ', age: 1 }
      ]
    } )
  }

// function App() {
  render() {
  return (
    <div className="App">
      <h1>This is a React Test Site</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch Name</button>
  
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My Hobbies: Drawing</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    </div>
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?'));
}
}

export default App;

