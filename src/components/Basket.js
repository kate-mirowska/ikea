import React, { Component } from 'react';
import BasketContent from './BasketContent';
import Button from './utils/Button';

import PropTypes from 'prop-types';

class Basket extends Component {
    render() {
        return (
            <div className={"basket-wrapper " + (this.props.isBasketOpen ? "open" : "close")}>
                <Button 
                    title={this.props.isBasketOpen ? "Zamknij koszyk" : "Rozwiń koszyk"} 
                    onClick={this.props.toggleBasket}
                />
                <BasketContent
                    isvisible={this.props.isBasketOpen}
                    productsInBasket={this.props.productsInBasket}
                    productsCount={this.props.productsCount}
                    removeFromCart={this.props.removeFromCart}
                />
            </div>
        )
    }
}

Basket.propTypes = {
    isBasketOpen: PropTypes.bool.isRequired,
    toggleBasket: PropTypes.func.isRequired,
    productsInBasket: PropTypes.array.isRequired,
    productsCount: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired    
}

export default Basket;