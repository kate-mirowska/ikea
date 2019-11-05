import React, { Component } from 'react';
import Button from './utils/Button';

import PropTypes from 'prop-types';

class ProductItem extends Component {
    render() {
        const { name, price, img } = this.props.product;

        return (
            <li className="product-item">
                <div>
                    <a href="/" title={name}>
                        <img src={img} alt={name}/>
                        <h3>{name}</h3>
                        <span>£{price}</span>
                    </a>
                    <Button title={"Dodaj do koszyka"} onClick={(e) => this.props.addToCart(e, this.props.product)}/>
                </div>
            </li>
        )
    }
}

ProductItem.propTypes = {
}

export default ProductItem;