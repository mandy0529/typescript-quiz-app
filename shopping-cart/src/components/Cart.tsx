import React from 'react';
import {Wrapper} from '../styles/Cart.styles';
import {CartType} from '../type/type';
import CartItem from './CartItem';

const Cart: React.FC<CartType> = ({item, AddToCart, removeItem}) => {
  return (
    <Wrapper>
      <h2>your shopping cart</h2>
      {item.length === 0 ? <p>no itmes in your cart</p> : null}
      {item.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            AddToCart={AddToCart}
            removeItem={removeItem}
          />
        );
      })}
    </Wrapper>
  );
};

export default Cart;
