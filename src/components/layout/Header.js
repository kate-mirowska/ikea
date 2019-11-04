import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Basket from '../Basket';

class Header extends Component {
    render() {
        return (
            <div>
                <header style={headerStyle}>
                    <h1>Ikea</h1>
                    {/* <Link to="/" style={linkStyle}>Home</Link> */}
                    {' | '}
                    {/* <Link to="/about" style={linkStyle}>About</Link> */}
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

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;