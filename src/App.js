// import React from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'James', age: 34},
      { name: 'Linda', age: 24},
      { name: 'JJ', age: 2}
    ]
  });

  useState('some other value');

  const [otherState, setOtherState] = useState('some other value');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    setPersonsState( {
      persons: [
        { name: 'Jimmy', age: 34 },
        { name: 'Linda', age: 24 },
        { name: 'JJ', age: 1 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>This is a React Test Site</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
  
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobbies: Drawing</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Does this work now?'));
}

export default App;


