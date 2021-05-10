import React, { Component } from 'react'

class EjercicioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = 0;
        this.lanzarDado = this.lanzarDado.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.lanzarDado}>
                    <p>
                        <input type="submit" value="Tirar dado"/>
                    </p>
                    <p>
                        El número es: {this.state.value}
                    </p>
                </form>
            </div >
        );
    }

    lanzarDado(event) {
        event.preventDefault();
        var numero = Math.floor(Math.random() * 6) + 1;  
        this.setState({value: numero})      
    }

}

export default EjercicioComponent;