import React, { Component } from 'react'

class EjercicioComponent extends Component {

    constructor(props) {
        super(props);
        this.alCarrito = this.alCarrito.bind(this);
    }

    render() {
        return (
            <div class="container">
                <div class="items">
                    <form onSubmit={this.alCarrito}>
                        <h2 class="text-center">TIENDA</h2>
                        <p>
                            <label>Producto: </label>
                            <select>
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
                            <input id="cant" type="number" />
                        </p>
                        <p>
                            <button class="item-button" onClick="alCarrito">Añadir a la lista</button>
                        </p>
                    </form>
                </div>
                <hr></hr>
                <div class="row">
                    <h2 class="text-center">Lista de la compra</h2>
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Producto</h6>
                    </div>
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Precio</h6>
                    </div>
                    <div class="shopping-cart-header">
                        <h6 class="text-truncate">Cantidad</h6>
                    </div>
                </div>

                <div class="shopping-cart-items shoppingCartItemsContainer"></div>

                <div class="row">
                    <div class="shopping-cart-total align-items-center">
                        <p class="mb-0">Total</p>
                        <p class="shoppingCartTotal">0€</p>
                    </div>
                </div>


            </div >
        );
    }

    alCarrito(event) {
        event.preventDefault();
        const v1 = event.target.precio.value;
        const v2 = event.target.cant.value;
        const suma = v1 * v2;
        alert('El total del ' + suma + ' euros.');
    }

}

export default EjercicioComponent;