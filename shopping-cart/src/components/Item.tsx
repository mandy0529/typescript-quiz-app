import {Wrapper} from '../styles/Item.styles';
import Button from '@material-ui/core/Button';
import React from 'react';
import {ItemType} from '../type/type';

const Item: React.FC<ItemType> = ({item, AddToCart}) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description.slice(0, 50)}...</p>
        <h3>${item.price}</h3>
      </div>
      <Button>add to cart</Button>
    </Wrapper>
  );
};

export default Item;
