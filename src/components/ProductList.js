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
            <div className="product-list-wrapper">
                <div className="product-list-header">
                    <h2>Łóżka - bestsellery</h2>
                    <div className="product-list-sorter">
                        <Button title={"Sortuj"} onClick={this.toggleFilters}/>
                        <ul style={this.getStyle()} className="sorters">
                            <li onClick={this.props.sortByName}>Nazwa</li>
                            <li onClick={this.props.sortByPrice}>Cena</li>
                        </ul>
                    </div>
                </div>
                
                <ul className="product-list">
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

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
    addToCart: PropTypes.func.isRequired,
    sortByName: PropTypes.func.isRequired,
    sortByPrice: PropTypes.func.isRequired
}

export default ProductList;