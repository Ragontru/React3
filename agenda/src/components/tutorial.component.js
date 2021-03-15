import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    /* apunte   */

    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellido = this.onChangeApellido.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeCiudad = this.onChangeCiudad.bind(this);
    this.onChangeCp = this.onChangeCp.bind(this);
    this.onChangeFech_nac  = this.onChangeFech_nac.bind(this);
    

    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
        /* apunte   */
        key: null,
        nombre:"",
        apellido:"",
        direccion:"",
        ciudad:"",
        cp:"",
        fech_nac:"",
     
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }
/* apunte   */
  onChangeNombre(e){
    const nombre = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          nombre: nombre,
        },
      };
    });
  }

  onChangeApellido(e){
    const apellido = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          apellido: apellido,
        },
      };
    });
  }

  onChangeDireccion(e){
    const direccion = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          direccion: direccion,
        },
      };
    });
  }

  onChangeCiudad(e){
    const ciudad = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          ciudad: ciudad,
        },
      };
    });

  }

  onChangeCp(e){
    const cp = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          cp: cp,
        },
      };
    });

  }

  onChangeFech_nac(e){
    const fech_nac = e.target.value;
    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          fech_nac: fech_nac,
        },
      };
    });

  }




  updatePublished(status) {
    TutorialDataService.update(this.state.currentTutorial.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateTutorial() {
    const data = {
      /* apunte   */
      nombre: this.state.currentTutorial.nombre,
      apellido: this.state.currentTutorial.apellido,
      direccion: this.state.currentTutorial.direccion,
      ciudad: this.state.currentTutorial.ciudad,
      cp: this.state.currentTutorial.cp,
      fech_nac: this.state.currentTutorial.fech_nac,

    };

    TutorialDataService.update(this.state.currentTutorial.key, data)
      .then(() => {
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.key)
      .then(() => {
        this.props.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }
/* apunte   */
  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        <h4>Tutorial</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  value={currentTutorial.nombre}
                  onChange={this.onChangeNombre}
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellido">apellido</label>
                <input
                  type="text"
                  className="form-control"
                  id="apellido"
                  value={currentTutorial.apellido}
                  onChange={this.onChangeApellido}
                />
              </div>
              <div className="form-group">
                <label htmlFor="direccion">Direccion</label>
                <input
                  type="text"
                  className="form-control"
                  id="direccion"
                  value={currentTutorial.direccion}
                  onChange={this.onChangeDireccion}
                />
              </div>
              <div className="form-group">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                  type="text"
                  className="form-control"
                  id="ciudad"
                  value={currentTutorial.ciudad}
                  onChange={this.onChangeCiudad}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cp">Codigo Postal</label>
                <input
                  type="text"
                  className="form-control"
                  id="cp"
                  value={currentTutorial.cp}
                  onChange={this.onChangeCp}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fech_nac">Fecha nacimiento</label>
                <input
                  type="text"
                  className="form-control"
                  id="fech_nac"
                  value={currentTutorial.fech_nac}
                  onChange={this.onChangeFech_nac}
                />
              </div>
             
              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}