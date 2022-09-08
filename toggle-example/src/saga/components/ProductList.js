import React from 'react'
import ProductRow from './ProductRow';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Actions';

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(({ productList }) => productList);

  return (
    <div>
      <h3>Products</h3>
      {products && products.map(product => (
        <ProductRow
          key={product.id}
          addToCart={() => dispatch(addToCart(product.id))}
          {...product}
        />
      ))}
    </div>
  )
}

export default ProductList;