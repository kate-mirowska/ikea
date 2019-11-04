import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProductPage from './components/pages/ProductPage';

import products from './data/products';

class App extends Component {
    state = {
        products: products,
        isBasketOpen: false,
        productsCount: 0,
        addedProduct: {},
        productsInBasket: []
    }

    constructor(props) {
        super(props);
        this.toggleBasket = this.toggleBasket.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
    }

    toggleBasket(e) {
        e.preventDefault();
        this.setState({ isBasketOpen: !this.state.isBasketOpen })
    }

    addToCart = (e, product) => {
        e.preventDefault();
        this.setState({ 
            isBasketOpen: true, 
            addedProduct: product, 
            productsCount: this.state.productsCount + 1,
            productsInBasket: this.state.productsInBasket.concat(product) 
        })
    }

    updateCart = () => {
        return this.state.addedProduct
    }

    sortByName() {
        const sorted = products.sort(function(a, b){
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })

        this.setState({ products: sorted })
    }

    sortByPrice() {
      const sorted = products.sort(function(a, b){
        if(a.price < b.price) { return -1; }
        if(a.price > b.price) { return 1; }
        return 0;
    })

    this.setState({ products: sorted })
    }

    render() {
      return (
        <div
          className="App"
          style={appStyle}
        >
          <Header
              isBasketOpen={this.state.isBasketOpen} 
              toggleBasket={this.toggleBasket}
              updateCart={this.updateCart}
              productsCount={this.state.productsCount}
              productsInBasket={this.state.productsInBasket}
          />
          <ProductPage
              products={this.state.products}
              addToCart={this.addToCart}
              sortByName={this.sortByName}
              sortByPrice={this.sortByPrice}
          />
        </div>
      );
    }
}

const appStyle = {
  maxWidth: '1280px',
  margin: '0 auto'
}

export default App;