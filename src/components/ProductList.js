import React, { Component } from 'react';
import Button from './utils/Button';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';


class ProductList extends Component {
    state = {
        filtersVisible: false,
    }

    constructor(props) {
        super(props);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    toggleFilters(e) {
        e.preventDefault();
        this.setState({ filtersVisible: !this.state.filtersVisible })
    }

    getStyle = () => {
        return {
            display: this.state.filtersVisible ? 'block' : 'none',
        }
    }

    render() {
        return (
            <div className="product-list--wrapper">
                <h2>Lista produktów</h2>
                <Button title={"Sortuj"} onClick={this.toggleFilters}/>
                <ul style={this.getStyle()}>
                    <li onClick={this.props.sortByName}>Nazwa</li>
                    <li onClick={this.props.sortByPrice}>Cena</li>
                </ul>
                <ul style={productListStyle}>
                    {this.props.products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                            addToCart={this.props.addToCart}
                        />	
                    ))}
                </ul>
            </div>
        )
    }
}

const productListStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

ProductList.propTypes = {

}

export default ProductList;