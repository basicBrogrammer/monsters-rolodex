import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [{ id: 'asr1', name: 'Frankenstein' }, { id: 'asr2', name: 'Dracula' }, { id: 'asr3', name: 'Zombie' }]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
