import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProductPage from './components/pages/ProductPage';


class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ProductPage />
      </div>
    );
  }
}

export default App;