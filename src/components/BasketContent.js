import React, { Component } from 'react';
import Button from './utils/Button';
import PropTypes from 'prop-types';

class BasketContent extends Component {
    state = {

    }

    render() {
        return (
            <div className="basket-content">
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