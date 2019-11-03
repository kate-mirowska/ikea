import React, { Component } from 'react';
import Basket from '../Basket';
import ProductList from '../ProductList';

import PropTypes from 'prop-types';

class ProductPage extends Component {
    state = {

    }

    render() {
        return (
            <div className="container product-page">
                <div>Nasze produkty</div>
                <Basket />
                <ProductList />
            </div>
        )
    }
}

ProductPage.propTypes = {

}

export default ProductPage;