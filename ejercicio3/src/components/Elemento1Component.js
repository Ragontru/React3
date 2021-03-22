import React, { Component } from 'react'

export default class Elemento1Component extends Component {
    render() {
        return (
            <div>
                <p>
                    <label>Elemento 1 : </label>
                    <input value={this.props.elem1} type="text" />
                </p>
            </div>
        );
    }
}