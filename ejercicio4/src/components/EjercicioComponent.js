import React, { Component } from 'react'

class EjercicioComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carritotal: 0,
            carrito: ''
        };
        this.alCarrito = this.alCarrito.bind(this);
    }

    render() {
        return (
            <div className="App">

                <form onSubmit={this.alCarrito}>
                    <h2 className="text-center">TIENDA</h2>
                    <p>
                        <label>Producto: </label>
                        <select name="producto">
                            <option id="pan" value="pan">Pan</option>
                            <option id="leche" value="leche">Leche</option>
                            <option id="nueces" value="nueces">Nueces</option>
                            <option id="manzana" value="manzana">Manzana</option>
                        </select>

                    </p>
                    <p>
                        <label>Precio: </label>
                        <input id="precio" type="number" />
                    </p>
                    <p>
                        <label>Cantidad: </label>
                        <input id="cantidad" type="number" />
                    </p>
                    <p>
                        <input type="submit" value="Añadir a la lista" onSubmit={this.alCarrito}></input>
                    </p>
                </form>

                <hr></hr>
                <div className="row">
                    <h2 className="text-center">Lista de la compra</h2>
                    <h6 className="text-truncate">Producto</h6>
                </div>

                <div className="row">
                    <div>
                        <p className="mb-0">Total</p>
                    </div>
                </div>


            </div >
        );
    }

    alCarrito(event) {
        event.preventDefault();

        var prod = (event.target.producto.value);
        var cant = parseInt(event.target.cantidad.value);
        var prc = parseInt(event.target.precio.value);
        var totalArt = cant * prc;
        var factura = cant + ' ' + prod + ' : ' + totalArt + ' €. \n';
        // actualizar aparte
        var total = totalArt;

        console.log(factura);
        console.log(total);

        this.setState((state) => {
            return { carrito: factura, carritotal: total }
        });
    }

}

export default EjercicioComponent;