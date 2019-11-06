import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasketContent extends Component {
    getStyle = () => {
        return {
            display: this.props.isvisible ? 'block' : 'none'
        }
    }
    render() {
        return (
            <div 
                className="basket-content" 
                isvisible={this.props.isBasketOpen} 
                style={this.getStyle()}
            >
                <ul>
                    {
                        this.props.productsCount < 1 ?
                        <li>Koszyk jest pusty</li> :
                        this.props.productsInBasket.map((product) => (
                                <li key={product.id} className="basket-item">
                                    <div className="product-info-top">
                                        <div className="basket-item-img">                                    
                                            <img src={product.img} alt={product.name}/>
                                        </div>
                                        <span className="product-name">{product.name}</span>
                                        <span className="product-qty">Ilość: {product.quantity}</span>
                                    </div>
                                    <span className="product-price">£{product.price} / sztuka</span>
                                    <span className="remove-item" onClick={this.props.removeFromCart.bind(this, product.id)}></span>
                                </li>
                            )
                        )
                    }
                </ul>
                <div>Ilość produktów w koszyku: {this.props.productsCount}</div>
            </div>
        )
    }
}

BasketContent.propTypes = {
    isvisible: PropTypes.bool.isRequired,
    productsInBasket: PropTypes.array.isRequired,
    productsCount: PropTypes.number.isRequired,
    removeFromCart: PropTypes.func.isRequired  
}

export default BasketContent;