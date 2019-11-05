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
                    updateCart={this.props.updateCart}
                    productsCount={this.props.productsCount}
                    productsInBasket={this.props.productsInBasket}
                />
            </div>
        )
    }
}

Basket.propTypes = {

}

export default Basket;