import logo from './logo.svg';
import './App.css';
import EnunciadoComponent from './components/EnunciadoComponent';
import { Component } from 'react';

class App extends Component {

  constructor() {
    super(
      this.state = {
        num1: 1,
        num2: 2
      }
    )
  }

  render() {
    return (
      <div className="App">
        <EnunciadoComponent></EnunciadoComponent>

      </div>
    );
  }

}

export default App;
