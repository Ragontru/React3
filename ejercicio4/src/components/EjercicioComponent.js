import React, { Component } from 'react'

class EjercicioComponent extends Component {

    constructor(props) {
        super(props);
        this.totalArt = this.totalArt.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.totalArt}>
                    <p>
                        <label>Producto: </label>
                        <select>
                            <option value="pan">Pan</option>
                            <option value="leche">Leche</option>
                            <option value="nueces">Nueces</option>
                            <option value="manzana">Manzana</option>
                        </select>

                    </p>
                    <p>
                        <label>Precio: </label>
                        <input name="precio" type="number" />
                    </p>
                    <p>
                        <label>Cantidad: </label>
                        <input name="cant" type="number" />
                    </p>
                    <p>
                        <input type="submit" value="Total"/>
                    </p>
                </form>
            </div >
        );
    }

    totalArt(event) {
        event.preventDefault();
        const v1 = parseInt(event.target.precio.value);
        const v2 = parseInt(event.target.cant.value);
        const suma = v1 * v2;
        alert('El total del ' + suma);
    }

}

export default EjercicioComponent;