

import React, { Component } from 'react';
import './App.css';
import ElementCreator from './ElementCreator'


class App extends Component {
  state = {
    input: '',
    list: [],
    test: "hello, I'm a test"
  }

  onChange = (e) => {
    console.log("Things changed", this.state.input)
    this.setState({
      input: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      list : [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Todo List</h1>
       <header className="App-header">
       <ElementCreator starTrek={this.state.list}/>
        <form onSubmit={this.onSubmit}>
         <input value={this.state.input} onChange={this.onChange}/>
        <br/>
        <button>Submit</button>
        </form>
        <h1>What is this here for</h1>
       </header>
     </div>
      
    );
  }
}


export default App;