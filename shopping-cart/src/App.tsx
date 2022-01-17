import {useState} from 'react';
import {useQuery} from 'react-query';

// material component
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

// styles
import {Wrapper} from './styles/App.styles';
import {DataType} from './type/type';
import Item from './components/Item';

const getData = async (): Promise<DataType[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const App = () => {
  const {data, isLoading, error} = useQuery<DataType[]>('products', getData);

  const totalItem = () => {};

  const AddToCart = () => {};

  const removeItem = () => {};

  if (isLoading) return <LinearProgress />;
  if (error) return <div>something went wrong</div>;

  return (
    <Wrapper className="App">
      <Grid container spacing={4}>
        {data &&
          data.map((item) => {
            return (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item key={item.id} item={item} AddToCart={AddToCart} />
              </Grid>
            );
          })}
      </Grid>
    </Wrapper>
  );
};

export default App;
