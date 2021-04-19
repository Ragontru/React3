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
                    <label>
                        Producto:
                <select>
                            <option value="pan">Pan</option>
                            <option value="leche">Leche</option>
                            <option value="nueces">Nueces</option>
                            <option value="manzana">Manzana</option>
                        </select>
                        <br />
                Precio:
                    <input name="precio" type="number" />
                        <br />
                Cantidad:
                    <input name="cantidad" type="number" />
                        <br />
                    </label>
                </form>
            </div>
        );
    }

    totalArt(event){
        event.preventDefault();
        const cant = parseInt(event.targer.cantidad.value);
        const prec = parseInt(event.targer.precio.value);
        const totalArtInd = cant * prec;
        alert('El precio de '+cant+' es de '+totalArtInd);
    }

}

export default EjercicioComponent;