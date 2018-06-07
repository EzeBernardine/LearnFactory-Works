import React, { Component } from 'react';
import Content from './Content';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: 0
    }
  }

  setNewNumber= () => {
    this.setState({data: this.state.data+1})
  }
  render() {
    return (
      <div className="App">
        <button onClick = {this.setNewNumber}>INCREMENT</button>
        <Content myNumber = {this.state.data}></Content>
      </div>
    );
  }
}

export default App;