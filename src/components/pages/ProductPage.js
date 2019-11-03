import React, { Component } from 'react';
import Basket from '../Basket';
import ProductList from '../ProductList';

import products from '../../data/products';
import PropTypes from 'prop-types';

class ProductPage extends Component {
    state = {
        products: products
    }
    
    render() {
        return (
            <div className="container product-page">
                <div>Nasze produkty</div>
                <Basket />
                <ProductList products={this.state.products} />
            </div>
        )
    }
}

ProductPage.propTypes = {

}

export default ProductPage;