import React, { Component } from 'react';
import './App.css';
import Number from './components/Number';
import Button from './components/Button';

class App extends Component {
  state = {
  count: 20
  }

  incrementCount = () => {
    this.setState ({
      count: this.state.count +1
    });
  }

  decreaseCount = () => {
    this.setState ({
      count: this.state.count -1
    });
  }

  render() {
    return (
      <div className="App">
        <Number value={this.state.count} />
        <Button onPress={this.incrementCount} label={"+"}/>
        <Button onPress={this.decreaseCount} label={"-"}/>
      </div>
    );
  }
}

export default App;
