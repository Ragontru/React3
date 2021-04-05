import React, { Component } from 'react'

export default class Elemento1Component extends Component {
    render() {
        return (
            <div>
                <input value={this.props.elem1} onChange={this.props.cambiarElemento} />
            </div>
        );
    }
}