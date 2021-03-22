import React, { Component } from 'react'

class EjercicioComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'Lunes' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <label>
                <br />
            Seleccione el día de la semana
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Lunes">Lunes</option>
                    <option value="Martes">Martes</option>
                    <option value="Miércoles">Miércoles</option>
                    <option value="Jueves">Jueves</option>
                    <option value="Viernes">Viernes</option>
                    <option value="Sábado">Sábado</option>
                    <option value="Domingo">Domingo</option>
                </select>
                <p>Día elegido: {this.state.value}</p>
            </label>
        );
    }
}
export default EjercicioComponent;