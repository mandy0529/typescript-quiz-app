import {useState} from 'react';
import {useQuery} from 'react-query';

// material component
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';

// styles
import {StyledButton, Wrapper} from './styles/App.styles';
import {DataType} from './type/type';
import Item from './components/Item';
import Cart from './components/Cart';

const getData = async (): Promise<DataType[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

const App = () => {
  const [cartopen, setCartOpen] = useState(false);
  const [items, setItems] = useState<DataType[]>([]);
  const {data, isLoading, error} = useQuery<DataType[]>('products', getData);

  const totalItem = (items: DataType[]): number => {
    return items.reduce((total: number, item) => total + item.amount, 0);
  };

  const AddToCart = (clickedItem: DataType) => {
    // // 1. 카트에 내가 클릭한 아이템이 있는지 없는지 먼저 찾아보자.
    const tempCart = items.find((item) => item.id === clickedItem.id);
    if (tempCart) {
      // 이미 아이템이 있을때
      const sameItem = items.map((item) => {
        if (item.id === clickedItem.id) {
          return {...item, amount: item.amount + 1};
        } else {
          return item;
        }
      });
      setItems(sameItem);
    } else {
      // 아이템이 쳐 없을때
      setItems((prev) => [...prev, {...clickedItem, amount: 1}]);
    }

    // setItems((prev) => {
    //   const inCartItem = prev.find((item) => item.id === clickedItem.id);
    //   if (inCartItem) {
    //     // 2. 이미 아이템이 있는 경우
    //     return prev.map((item) =>
    //       item.id === clickedItem.id ? {...item, amount: item.amount + 1} : item
    //     );
    //   }
    //   // 3. 새로운 아이템을 추가하는 경우
    //   return [...prev, {...clickedItem, amount: 1}];
    // });
  };

  const removeItem = (id: number) => {
    // 1. 아이템이 1개 이상일때
    // 2. 아이템이 1개일때
    const removedItem = items
      .map((item) => {
        if (item.id === id) {
          return {...item, amount: item.amount - 1};
        }
        return item;
      })
      .filter((item) => item.amount !== 0);

    setItems(removedItem);
  };

  // loading or error
  if (isLoading) return <LinearProgress />;
  if (error) return <div>something went wrong</div>;

  return (
    <Wrapper className="App">
      <Drawer anchor="right" open={cartopen} onClose={() => setCartOpen(false)}>
        <Cart item={items} AddToCart={AddToCart} removeItem={removeItem} />
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={totalItem(items)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

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
