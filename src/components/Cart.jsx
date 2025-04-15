import React from 'react';
import { FaTrashAlt, FaCheckCircle, FaFileAlt } from 'react-icons/fa';

function Cart({ cart, removeFromCart, placeOrder, orderHistory }) {
  return (
    <div className="panel">
      <div className="cart-section">
        <h2 className="panel-title">
          <span className="blood-icon">🛒<h2>Your Cart</h2></span> 
        </h2>
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-info">{item.name} - ₹{item.price}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="btn-remove"
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={placeOrder}
          className="btn btn-order"
          disabled={cart.length === 0}
        >
          <FaCheckCircle /> Place Order
        </button>

        <div className="order-history">
          <h3 className="history-title">
            <FaFileAlt /> Order History
          </h3>
          <ul className="history-list">
            {orderHistory.map((order, idx) => (
              <li key={idx} className="history-item">
                Order #{idx + 1} - {order.length} item(s)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cart;