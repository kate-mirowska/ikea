import React, { Component } from 'react';
import Button from './utils/Button';
import PropTypes from 'prop-types';

class BasketContent extends Component {
    state = {

    }

    getStyle = () => {
        return {
            display: this.props.isvisible ? 'block' : 'none',
        }
    }

    render() {
        return (
            <div 
                className="basket-content" 
                isvisible={this.props.isBasketContentVisible} 
                style={this.getStyle()}
            >
                <div>Zawartosc koszyka</div>
                <ul>
                    <li>Koszyk jest pusty</li>
                </ul>
            </div>
        )
    }
}


BasketContent.propTypes = {

}

export default BasketContent;