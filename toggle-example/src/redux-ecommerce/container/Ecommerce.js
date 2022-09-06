import { useEffect } from 'react';

import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import { useDispatch } from 'react-redux';
import { requestProducts } from '../Actions';

const Ecommerce = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts();

    async function getProducts() {
      try {
        const response = await fetch("http://my-json-server.typicode.com/ScottiBR/react-state-management/productList");
        const products = await response.json();

        if (products) dispatch(requestProducts(products));

      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch]);

  return (
    <div>
      <h2>Shopping</h2>
      <hr />
      <ProductList />
      <hr />
      <Cart />
    </div>
  );
}

export default Ecommerce;