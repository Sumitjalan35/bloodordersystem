import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const placeOrder = () => {
    if (cart.length === 0) return;
    setOrderHistory([...orderHistory, cart]);
    setCart([]);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  return (
    <div className="app-container">
      <header className="header">
      <div className="logo"></div>

        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Blood Order System
        </motion.h1>
        <p className="subtitle">Quick and reliable blood supply management</p>
      </header>

      <div className="grid-container">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ProductList addToCart={addToCart} />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            placeOrder={placeOrder}
            orderHistory={orderHistory}
          />
          {orderPlaced && (
            <div className="order-success">
              ✅ Order placed successfully!
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default App;