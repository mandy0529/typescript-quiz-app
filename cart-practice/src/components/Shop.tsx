import React, {useEffect, useState} from 'react';
import {Wrapper} from '../styles/Shop.styles';
import {DataType} from '../types/type';
import {API_END_POINT} from '../utils/helper';

const Shop = () => {
  const [cart, setCart] = useState([]);

  const fetchData = async (): Promise<DataType[]> => {
    const response = await fetch(API_END_POINT);
    const data = await response.json();
    setCart(data);
    return data;
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  console.log(cart, 'cart');

  return <Wrapper></Wrapper>;
};

export default Shop;
