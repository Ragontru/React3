import React, { Component } from 'react'

class EjercicioComponent extends Component {
    constructor(props) {
        super(props);
        this.sumar = this.sumar.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sumar}>
                    <p>
                        <label>Número 1 : </label>
                        <input name="num1" type="number" />
                    </p>
                    <p>
                        <label>Número 2 : </label>
                        <input name="num2" type="number" />
                    </p>
                    <p>
                        <input type="submit" value="sumar" />
                    </p>
                </form>
            </div>
        );
    }

    sumar(event) {
        event.preventDefault();
        const v1 = parseInt(event.target.num1.value);
        const v2 = parseInt(event.target.num2.value);
        const suma = v1 + v2;
        alert('la suma es de : ' + suma);
    }
}

export default EjercicioComponent;