import React from 'react'
import ProductRow from './ProductRow';

function ProductList({ products = [], addToCart }) {
  return (
    <div>
      <h3>Products</h3>
      {products && products.map(product => (
        <ProductRow key={product.id} addToCart={addToCart} {...product} />
      ))}
    </div>
  )
}

export default ProductList;