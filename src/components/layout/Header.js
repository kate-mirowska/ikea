import React, { Component } from 'react';
import Basket from '../Basket';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <header className="header">
                    <h1>Ikea</h1>
                    <img src="https://www.ikea.com/gb/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg" alt="Ikea logo"/>
                </header>
                <Basket 
                        isBasketOpen={this.props.isBasketOpen} 
                        toggleBasket={this.props.toggleBasket}
                        productsInBasket={this.props.productsInBasket}
                        productsCount={this.props.productsCount}
                        removeFromCart={this.props.removeFromCart}
                />
            </div>
        )
    }
}

Header.propTypes = {
    isBasketOpen: PropTypes.bool.isRequired,
    toggleBasket: PropTypes.func.isRequired,
    productsInBasket: PropTypes.array.isRequired,
    productsCount: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired    
}

export default Header;