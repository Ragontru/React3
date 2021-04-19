import React, { Component } from 'react'

export default class EnunciadoComponent extends Component {
    render() {
        return (
            <div>
                <h1>Ejercicio 4 </h1>
                <p>Crear una aplicación para añadir elementos a una factura que se mostrará en la página.</p>
                <p>Tendrá un formulario que recogerá el nombre del producto mediante un selector tipo select,</p>
                <p>su precio y la cantidad, ambos en un elemento tipo number; al pulsar el botón se añadirá esa</p>
                <p>línea a la factura, actualizando el precio final de la misma.</p>
                <hr></hr>
            </div>
        )
    }
}