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
    otherState: 'some other value',
    showPersons: false
  };


 switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    this.setState( {
      persons: [
        { name: newName, age: 34 },
        { name: 'Linda', age: 24 },
        { name: 'JJ', age: 1 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 34 },
        { name: 'Linda', age: 24 },
        { name: 'JJ', age: 2}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

render () {
  const style = {
    backgroundColor: '#00ccff',
    font: 'inherit',
    border: '1px solid gray',
    borderRadius: '5px',
    padding: '8px',
    color: 'white',
    cursor: 'pointer'
  };


  let persons = null;

  if (this.state.showPersons) {
    persons = (
      <div>
        { this.state.persons.map(person => {
          return <Person
            name={person.name}
            age={person.age} />
        })
        }
    </div> 
    );
  }


  return (
    <div className="App">
      <h1>This is a React Test Site</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
}
}

export default App;


