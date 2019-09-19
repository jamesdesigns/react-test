// import React from 'react';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'James', age: 34},
      { id: 'vasdf1', name: 'Linda', age: 24},
      { id: 'asdf11', name: 'JJ', age: 2}
    ],
    otherState: 'some other value',
    showPersons: false
  };




  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 34 },
        { name: 'Linda', age: 24 },
        { name: 'JJ', age: 2}
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
        { this.state.persons.map((person, index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id} />
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


