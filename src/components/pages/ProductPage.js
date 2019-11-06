import React, { Component } from 'react';
import ProductList from '../ProductList';

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
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    sortByName: PropTypes.func.isRequired,
    sortByPrice: PropTypes.func.isRequired
}

export default ProductPage;