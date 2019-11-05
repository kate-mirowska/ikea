import React, { Component } from 'react';
import Basket from '../Basket';
import ProductList from '../ProductList';

import products from '../../data/products';
import PropTypes from 'prop-types';

class ProductPage extends Component {

    render() {
        return (
            <div className="container product-page">
                <ProductList 
                    products={this.props.products}
                    addToCart={this.props.addToCart}
                    sortByName={this.props.sortByName}
                    sortByPrice={this.props.sortByPrice}
                />
            </div>
        )
    }
}

ProductPage.propTypes = {

}

export default ProductPage;