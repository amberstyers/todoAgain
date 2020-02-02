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
    console.log("this is state" + this.state.input)
    return (
      <div className="App">
       <header className="App-header">
        <div>{this.state.test}</div>
        <form onSubmit={this.onSubmit}>
        <input value={this.state.input} onChange={this.onChange}/>
        <button>Submit</button>
        </form>
       </header>
     </div>
      
    );
  }
}

export default App;