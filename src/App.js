// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <div>Hello</div>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ElementCreator from './elementCreator'

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
       <header className="App-header">
       <ElementCreator starTrek={this.state.list}/>
        <form onSubmit={this.onSubmit}>
         <input value={this.state.input} onChange={this.onChange}/>
        <br/>
        <button>Submit</button>
        </form>
       </header>
     </div>
      
    );
  }
}

export default App;