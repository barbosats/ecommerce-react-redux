// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';
import SuperCoin from './Components/SuperCoin'; // Importando o componente SuperCoin

const App = () => {
  return (
    <div>
      <h1 className='app-heading'>E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoin /> {/* Incluindo o componente SuperCoin */}
    </div>
  );
};

export default App;

