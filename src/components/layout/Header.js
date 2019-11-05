import React, { Component } from 'react';
import Basket from '../Basket';

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
                        updateCart={this.props.updateCart}
                        productsCount={this.props.productsCount}
                        productsInBasket={this.props.productsInBasket}
                />
            </div>
        )
    }
}

export default Header;