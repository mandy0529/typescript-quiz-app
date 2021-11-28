import {Button} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {Idata} from '../AppCart';

type IItem = {
  item: Idata;
  handleAddtoCart: (clickedItem: Idata) => void;
};

const Item: React.FC<IItem> = ({item, handleAddtoCart}) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={() => handleAddtoCart(item)}>add to cart</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  height: 100%;

  button {
    border-radius: 0 0 20px 20px;
  }
  img {
    max-width: 200px;
    max-height: 150px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    margin: 2rem auto;
  }
  div {
    padding: 1rem;
    height: 100%;
  }
`;

export default Item;
