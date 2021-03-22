import { Component } from 'react';
import './App.css';
import EjercicioComponent from './components/EjercicioComponent'
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
        <EjercicioComponent elem1={this.state.name}></EjercicioComponent>
      </div>
    );
  }
}

export default App;
