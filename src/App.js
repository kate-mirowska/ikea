import React, { Component } from 'react';
import Header from './components/layout/Header';
import ProductPage from './components/pages/ProductPage';

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
}

const appStyle = {
  maxWidth: '1280px',
  margin: '0 auto'
}

export default App;