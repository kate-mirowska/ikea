import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    state = {

    }

    render() {
        return (
            <div className="button-wrapper">
                <button onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        )
    }
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button;