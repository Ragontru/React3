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
                    <input value={this.props.lanzarDado} onChange={this.props.cambiarNumero}/>
                </div >
            </div >
        );
    }

    lanzarDado(event) {
        var numero = Math.floor(Math.random() * 6) + 1;
        this.setState({
            
        })

    }

}

export default EjercicioComponent;