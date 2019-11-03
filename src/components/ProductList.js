import React, { Component } from 'react';
import Button from './utils/Button';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';


class ProductList extends Component {
    toggleFilters(e) {
        e.preventDefault();
        console.log('show filters')
    }

    render() {

        console.log(this.props)
        return (
            <div className="product-list--wrapper">
                <h2>Lista produktów</h2>
                <Button title={"Sortuj"} onClick={this.toggleFilters}/>
                <ul>
                    <li><Button title={"Nazwa"} onClick={this.toggleFilters}/></li>
                    <li><Button title={"Cena"} onClick={this.toggleFilters}/></li>
                </ul>
                <ul>
                    {this.props.products.map((product) => (
                        <ProductItem
                            key={product.id}
                            product={product}
                        />	
                    ))}
                </ul>
            </div>
        )
    }
}

ProductList.propTypes = {

}

export default ProductList;