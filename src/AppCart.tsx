import {useState} from 'react';
import {useQuery} from 'react-query';
import {Badge, Drawer, Grid, LinearProgress} from '@material-ui/core';
import Item from './components/Item';
import Cart from './components/Cart';

export type Idata = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const fetchData = async (): Promise<Idata[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const AppCart = () => {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState<Idata[]>([]);

  const {data, isLoading, error} = useQuery<Idata[]>('data', fetchData);

  const getTotalItem = (cart: Idata[]) => {
    return null;
  };
  const handleAddtoCart = (clickedItem: Idata) => {
    return null;
  };
  const handleRemoveCart = () => {
    return null;
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>something went wrong...</div>;

  return (
    <div>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
        <Cart
          getTotalItem={getTotalItem}
          item={cart}
          handleRemoveCart={handleRemoveCart}
        />
      </Drawer>
      <button onClick={() => setOpen(true)}>
        <Badge badgeContent={getTotalItem(cart)} color="error">
          Go cart
        </Badge>
      </button>
      <Grid container spacing={3}>
        {data &&
          data.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddtoCart={handleAddtoCart} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default AppCart;
