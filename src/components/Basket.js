import React, { Component } from 'react';
import BasketContent from './BasketContent';
import Button from './utils/Button';
import PropTypes from 'prop-types';

class Basket extends Component {
    state = {

    }

    toggleBasket(e) {
        e.preventDefault();
        console.log('clicked');
    }

    render() {
        return (
            <div className="basket-wrapper">
                <div>Koszyk</div>
                <Button title={"Rozwiń koszyk"} onClick={this.toggleBasket}/>
                <BasketContent />
            </div>
        )
    }
}

Basket.propTypes = {

}

export default Basket;