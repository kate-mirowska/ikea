import React, { Component } from 'react';
import Button from './utils/Button';
import PropTypes from 'prop-types';

class ProductItem extends Component {
    handleAddToCart (e) {
        e.preventDefault();
        console.log('added to cart');
    }

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
                    <Button title={"Dodaj do koszyka"} onClick={this.handleAddToCart} />
                </div>
            </li>
        )
    }
}

const productItemStyle = {
    width: '25%'
}

const imgStyle = {
    width: '100%'
}

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem;