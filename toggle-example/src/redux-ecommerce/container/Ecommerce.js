import { useEffect, useState } from 'react';

import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Ecommerce = () => {
  const [products, setProducts] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    getProducts();

    async function getProducts() {
      try {
        const response = await fetch("http://my-json-server.typicode.com/ScottiBR/react-state-management/productList");
        const products = await response.json();

        if (products) setProducts(products);

      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const addToCart = id => {
    const product = products.find(product => product.id === id);
    setCartList(prevState => [...prevState, product]);
  }

  const handleCheckout = () => {
    setCartList([]);
  }
  return (
    <div>
      <h2>Shopping</h2>
      <hr />
      <ProductList products={products} addToCart={addToCart} />
      <hr />
      <Cart cartList={cartList} handleCheckout={handleCheckout} />
    </div>
  );
}

export default Ecommerce;