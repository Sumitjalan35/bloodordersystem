import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const products = [
  { name: 'A+ Blood ', price: 500, type: 'A+' },
  { name: 'B+ Blood ', price: 480, type: 'B+' },
  { name: 'O- Blood ', price: 520, type: 'O-' },
];

function ProductList({ addToCart }) {
  return (
    <div className="panel">
      <h2 className="panel-title">
        <span className="blood-icon">🧪</span> Available Blood Packs
      </h2>
      <div className="blood-products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <span className="blood-type-badge">{product.type}</span>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="btn btn-add"
            >
              <FaPlusCircle /> Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;