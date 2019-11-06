import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProductPage from './components/pages/ProductPage';

import products from './data/products';

class App extends Component {
    state = {
        products: products,
        isBasketOpen: false,
        productsInBasket: [],
        productsCount: 0
    }

    constructor(props) {
        super(props);
        this.toggleBasket = this.toggleBasket.bind(this);
        this.sortByName = this.sortByName.bind(this);
        this.sortByPrice = this.sortByPrice.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    toggleBasket(e) {
        e.preventDefault();
        this.setState({ isBasketOpen: !this.state.isBasketOpen })
    }

    addToCart = (e, product) => {
        e.preventDefault();

        if (this.state.productsInBasket.includes(product)) {
            product.quantity++;
            this.setState({ productsCount: this.state.productsCount +1 })
        }

        this.setState({ 
            isBasketOpen: true, 
            productsCount: this.state.productsCount + 1,
            productsInBasket: this.state.productsInBasket.includes(product)? this.state.productsInBasket : this.state.productsInBasket.concat(product) 
        })
    }

    removeFromCart (id) {
        let products = this.state.productsInBasket.filter(product =>  product.id !== id )
        this.setState({ productsInBasket: products, productsCount: products.length })
        return products;
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
        <div className="App">
          <Header
              isBasketOpen={this.state.isBasketOpen} 
              toggleBasket={this.toggleBasket}
              productsInBasket={this.state.productsInBasket}
              productsCount={this.state.productsCount}
              removeFromCart={this.removeFromCart}
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

export default App;