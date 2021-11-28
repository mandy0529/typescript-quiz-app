import React from 'react';
import {Idata} from '../AppCart';

export type ICartProps = {
  handleRemoveCart: () => void;
  getTotalItem: (item: Idata[]) => void;
  item: Idata[];
};

const Cart: React.FC<ICartProps> = ({getTotalItem, handleRemoveCart, item}) => {
  return (
    <div>
      <h1>shopping list</h1>
      {item.length === 0 ? <div>no item added</div> : null}
    </div>
  );
};

export default Cart;
