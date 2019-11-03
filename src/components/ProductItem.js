import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductItem extends Component {
    render() {
        const { name, price, img } = this.props.product;

        return (
            <li className="product-item">
                <div>
                    <a href="/" title={name}>
                        <img src={img} alt={name} />
                        <h3>{name}</h3>
                        <span>£{price}</span>
                    </a>
                </div>
            </li>
        )
    }
}

ProductItem.propTypes = {
}

export default ProductItem;