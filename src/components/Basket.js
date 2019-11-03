import React, { Component } from 'react';
import BasketContent from './BasketContent';
import Button from './utils/Button';
import PropTypes from 'prop-types';

class Basket extends Component {
    state = {
        isBasketContentVisible: false
    }

    constructor(props) {
        super(props);
        this.toggleBasket = this.toggleBasket.bind(this);
      } 

    toggleBasket(e) {
        e.preventDefault();
        this.setState({ isBasketContentVisible: !this.state.isBasketContentVisible })
    }

    render() {
        return (
            <div className="basket-wrapper">
                <div>Koszyk</div>
                <Button title={"Rozwiń koszyk"} onClick={this.toggleBasket}/>
                <BasketContent isvisible={this.state.isBasketContentVisible}/>
            </div>
        )
    }
}

Basket.propTypes = {

}

export default Basket;