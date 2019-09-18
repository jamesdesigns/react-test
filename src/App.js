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

  // useState('some other value');

  // const [otherState, setOtherState] = useState('some other value');
  // console.log(personsState, otherState);

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

  const togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };


  return (
    <div className="App">
      <h1>This is a React Test Site</h1>
      <p>This is really working!</p>
      <button 
      style={style}
      onClick={this.togglePersonsHandler}>Switch Name</button>
    { 
      this.state.showPersons === true ? 
    <div>
        <Person 
          name={this.state.personsState.persons[0].name} 
          age={this.state.personsState.persons[0].age} 
          click={this.switchNameHandler.bind(this, 'James!')}
          changed={this.nameChangedHandler} >My Hobbies: Drawing</Person>
        <Person 
          name={this.state.personsState.persons[1].name} 
          age={this.state.personsState.persons[1].age} />
        <Person 
          name={this.state.personsState.persons[2].name} 
          age={this.state.personsState.persons[2].age} />
      </div> : null
      }
    </div>
  );
}
}
export default App;


