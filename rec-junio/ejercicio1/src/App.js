import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultado: 0
    }
    this.conversion = this.conversion.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.conversion}>
          <h3>Ejercicio 1</h3>
          <p>
            <label>Euros: </label>
            <input id="euros" type="number" min="0" required></input>
          </p>
          <p>
            <label>Moneda: </label>
            <select id="moneda" required>
              <option value="">Selecciona una moneda</option>
              <option value="libras">Libra esterlina</option>
              <option value="dolares">Dólar estadounidense</option>
              <option value="pesos">Peso mexicano</option>
              <option value="yenes">Yen japonés</option>
            </select>
          </p>
          <p>
            <input type="submit" value="Convertir" onSubmit={this.conversion}></input>
          </p>
          <p>
            <label>Resultado: {this.state.resultado}</label>
          </p>
        </form>
      </div>
    );
  }

  conversion(event) {
    event.preventDefault();
    var cantidad = parseFloat(event.target.euros.value)
    var moneda = (event.target.moneda.value);
    var convertido;

    switch (moneda) {
      case "libras":
        convertido = cantidad * 85 / 100;
        break;
      case "dolares":
        convertido = cantidad * 120 / 100;
        break;
      case "pesos":
        convertido = cantidad * 2420 / 100;
        break;
      case "yenes":
        convertido = cantidad * 13000 / 100;
        break;
    }

    console.log(' El resultado de ' + cantidad + ' euros a ' + moneda + ' es de ' + convertido);

    this.setState((state) => {
      return { resultado: convertido }
    });

  }
}


export default App;
