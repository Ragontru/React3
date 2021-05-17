import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.matriculacion = this.matriculacion.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.matriculacion}>
          <h3>Ejercicio 2</h3>
          <p>
            <label>Nombre del alumno: </label>
            <input id="nombre" type="text" pattern="[a-zA-Z]" required></input>
          </p>
          <p>
            <label>Apellidos del alumno: </label>
            <input id="apellidos" type="text" pattern="[a-zA-Z]" required></input>
          </p>
          <p>
            <label>DNI: </label>
            <input id="dni" type="text" min="9" max="9" pattern="[0-9]{8}[a-zA-Z]{1}" required></input>
          </p>
          <p>
            <label>Teléfono: </label>
            <input id="telefono" type="text" min="9" max="9" pattern="[0-9]{9}" required></input>
          </p>
          <p>
            <label>Curso: </label>
            <select id="curso" required>
              <option value="">Seleccione un curso</option>
              <option value="1º ASIR">1º de ASIR</option>
              <option value="1º DAW">1º de DAW</option>
              <option value="1º DAM">1º de DAM</option>
              <option value="2º ASIR">2º de ASIR</option>
              <option value="2º DAW">2º de DAW</option>
              <option value="2º DAM">2º de DAM</option>
            </select>
          </p>
          <p>
            <input type="submit" value="Matricular" />
          </p>
        </form>
      </div>
    );
  }


  matriculacion(event) {
    event.preventDefault();
    var nombre = (event.target.nombre.value);
    var apellidos = (event.target.apellidos.value);
    var dni = (event.target.dni.value);
    var telefono = (event.target.telefono.value);
    var curso = (event.target.curso.value);

    alert('El alumno ' + nombre + " " + apellidos + " con DNI " + dni + " y teléfono " + telefono + " ha sido matriculado en el curso " + curso);

  }
}

export default App;
