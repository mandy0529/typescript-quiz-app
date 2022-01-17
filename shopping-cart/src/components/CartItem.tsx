import React from 'react';
import {Wrapper} from '../styles/CartItem';
import Button from '@material-ui/core/Button';
import {CartItemType} from '../type/type';

const CartItem: React.FC<CartItemType> = ({item, AddToCart, removeItem}) => {
  return (
    <Wrapper>
      <div className="cart-item">
        <h3>{item.title}</h3>
        <div className="information">
          <p>price : ${item.price}</p>
          <p>total : ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeItem(item.id)}
          >
            −{' '}
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => AddToCart(item)}
          >
            +{' '}
          </Button>
        </div>
      </div>
      <img width="100" height="100" src={item.image} alt={item.title} />
    </Wrapper>
  );
};

export default CartItem;
