import { Component } from 'react';
import './App.css';
import Elemento1Component from './components/Elemento1Component';
import EjercicioComponent from './components/Elemento1Component'
import EnunciadoComponent from './components/EnunciadoComponent'

class App extends Component {
  constructor() {
    super()
    this.state = {
      elem1: 'Prueba'
    }
  }

  changeElement = (event => {
    this.setState({
      elem1: event.target.value
    })
  }
  )

  render() {
    return (
      <div className="App">
        <EnunciadoComponent></EnunciadoComponent>
        <label>Elemento 1 : </label>
        <input value={this.state.elem1} onChange={this.changeElement}></input>
        <Elemento1Component elem1={this.state.name}></Elemento1Component>
      </div>
    );
  }
}

export default App;
