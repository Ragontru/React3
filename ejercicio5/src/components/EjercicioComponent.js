import React, { Component } from 'react'

class EjercicioComponent extends Component {

    constructor(props) {
        super(props);
        this.lanzarDado = this.lanzarDado.bind(this);
    }

    render() {
        return (
            <div class="container content-main">
                <div class="row justify-content-center text-center">
                    <button class="btn btn-success" onClick="lanzarDado">
                        Lanzar dado
                </button>
                </div>
                <div class="row">
                    <input value="Tira el dado" onClick={this.props.cambiarNumero}/>
                </div >
            </div >
        );
    }

    lanzarDado(event) {
        var numero = Math.round(Math.random() * 5)
        

    }

}

export default EjercicioComponent;