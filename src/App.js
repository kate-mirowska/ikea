import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProductPage from './components/pages/ProductPage';

<<<<<<< HEAD
function App() {
  return (
    <div
      className="App"
      style={appStyle}
    >
      <Header />
      <ProductPage />
    </div>
  );
=======

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header />
        <ProductPage />
      </div>
    );
  }
>>>>>>> feature/components
}

const appStyle = {
  maxWidth: '1280px',
  margin: '0 auto'
}

export default App;