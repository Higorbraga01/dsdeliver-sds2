import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductList from './ProductsList';
import StepsHead from './StepsHeader';
import './styles.css';
import { OrderLocationdata, Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationdata>() ;

  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.error(error)
    )
  }, [])
    return (
        <div className="orders-container">
          <StepsHead />
          <ProductList products={products} />
          <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
        </div>     
    )
}

export default Orders;