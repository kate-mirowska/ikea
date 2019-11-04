import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BasketContent extends Component {
    getStyle = () => {
        return {
            display: this.props.isvisible ? 'block' : 'none',
        }
    }

    updateCart() {
        if (this.props.updateCart()) {

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
                            <li key={product.id}>
                                <div style={productItemStyle}>                                    
                                    <img src={product.img} alt={product.name} style={imgStyle}/>
                                    <span>{product.name}</span>
                                    <span>£{product.price}</span>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

const productItemStyle = {
    width: '25%',

}

const imgStyle = {
    width: '100%'
}


BasketContent.propTypes = {

}

export default BasketContent;