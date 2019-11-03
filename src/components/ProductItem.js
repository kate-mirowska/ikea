import React, { Component } from 'react';
import PropTypes from 'prop-types';
import products from '../data/products';

class ProductItem extends Component {
    render() {
console.log(this.props);

        const { name, price, img } = this.props.product;

        return (
            <li
                className="product-item"
                style={productItemStyle}
            >
                <div>
                    <a href="/" title={name}>
                        <img src={img} alt={name} style={imgStyle}/>
                        <h3>{name}</h3>
                        <span>£{price}</span>
                    </a>
                </div>
            </li>
        )
    }
}

const productItemStyle = {
    width: '25%',

}

const imgStyle = {
    width: '100%'
}

ProductItem.propTypes = {
}

export default ProductItem;