import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
  
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellidos = this.onChangeApellidos.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeCiudad = this.onChangeCiudad.bind(this);
    this.onChangeCp = this.onChangeCp.bind(this);
    this.onChangeFech_nac  = this.onChangeFech_nac.bind(this);

    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
     
      nombre:"",
      apellidos:"",
      direccion:"",
      ciudad:"",
      cp:"",
      fech_nac:"",


      published: false,
      submitted: false,
    };
  }


  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }

  onChangeApellidos(e) {
    this.setState({
      apellidos: e.target.value,
    });
  }
  onChangeDireccion(e){
    this.setState({
      direccion: e.target.value,
    });

  }
  onChangeCiudad(e){
    this.setState({
      ciudad: e.target.value,
    });

  }
  onChangeCp(e){
    this.setState({
      cp: e.target.value,
    });

  }

  onChangeFech_nac(e){
    this.setState({
      fech_nac: e.target.value,
    });

  }






  saveTutorial() {
    let data = {
   
      nombre: this.state.nombre,
      apellidos: this.state.apellidos,
      direccion:this.state.direccion,
      ciudad:this.state.ciudad,
      cp:this.state.cp,
      fech_nac:this.state.fech_nac,

    
      published: false
    };

    TutorialDataService.create(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
     
      nombre:"",
      apellidos:"",
      direccion:"",
      ciudad:"",
      cp:"",
      fech_nac:"",
 
      published: false,
      submitted: false,
   
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
           
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  required
                  value={this.state.nombre.nombre}
                  onChange={this.onChangeNombre}
                  name = "nombre"
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellidos"
                  required
                  value={this.state.nombre.apellidos}
                  onChange={this.onChangeApellidos}
                  name ="apellidos"
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  required
                  value={this.state.nombre.direccion}
                  onChange={this.onChangeDireccion}
                  name= "direccion"
                />
              </div>
              <div className="form-group">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  required
                  value={this.state.nombre.ciudad}
                  onChange={this.onChangeCiudad}
                  name = "ciudad"
                />
              </div>
              <div className="form-group">
                <label htmlFor="cp">Código Postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="cp"
                  required
                  value={this.state.nombre.cp}
                  onChange={this.onChangeCp}
                  name = "cp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="fech_nac">Fecha de nacimiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="fech_nac"
                  required
                  value={this.state.nombre.fech_nac}
                  onChange={this.onChangeFech_nac}
                  name = "fech_nac"
                />
              </div>



           

            <button onClick={this.saveTutorial} className="btn btn-success">
              Enviar
            </button>
          </div>
        )}
      </div>
    );
  }
}