import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name: 'test', age: 28
      }, {
        name: 'prince', age:29
      }, {
        name: 'bushra', age:26
      }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {
          name: newName, age: 27
        }, {
          name: 'prince', age:9
        }, {
          name: 'bushra', age:6
        }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max', age: 27
        }, {
          name: event.target.value, age:9
        }, {
          name: 'bushra', age:16
        }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm react apps</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('maximalian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'max!')} 
          changed={this.nameChangedHandler}
          >My best friend</Person>
        <Person 
          name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
