import React, { Component } from 'react'

export default class Elemento1Component extends Component {
    render() {
        return (
            <div>
                <p>
                    <input value={this.props.elem1} type="text" />
                </p>
            </div>
        );
    }
}