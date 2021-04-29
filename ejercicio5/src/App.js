import './App.css';
import EnunciadoComponent from '../../ejercicio5/src/components/EnunciadoComponent';
import EjercicioComponent from '../../ejercicio5/src/components/EjercicioComponent';
import { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state =  {
      num: '0'
    }
  }
  
  changeElement = (eve)

  return (
    <div className="App">
      <EnunciadoComponent></EnunciadoComponent>
      <EjercicioComponent></EjercicioComponent>
    </div>
  );
}

export default App;
