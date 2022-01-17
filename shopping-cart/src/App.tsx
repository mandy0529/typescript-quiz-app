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
    // // 1. 카트에 내가 클릭한 아이템이 있는지 없는지 먼저 찾아보자. find로!!
    const tempCart = items.find((item) => item.id === clickedItem.id);

    if (tempCart) {
      const sameItem = items.map((item) => {
        // 1-2. 아이템이 있는 상황에서 내가 클릭한 아이템만 amount을 올려야 하기 때문에 이안에서도 또 id 같은 것을 찾아줘야 한다.
        if (item.id === clickedItem.id) {
          // 1-3. 아이디가 같으면 그 아이템만 amount 1 올려주고
          return {...item, amount: item.amount + 1};
        } else {
          // 1-4. 아니라면 그냥 Item 만 배출
          return item;
        }
      });
      // 결론 => 아이템이 존재할 때 우리가 만든 sameitem을 우리의 아이템 배열에 담아주기
      setItems(sameItem);
    } else {
      // 2. 아이템이 쳐 없을때 ******************************
      //2-1. 아이템이 없을때는 우리의 아이템의 정보를 통째로 cart에 보내야하기 때문에 일단 우리의 배열을 펴주고, 우리의 배열 속성들을 객체에서 펴주고, amount는 새롭게 1로 정해줘야 한다.
      setItems((prev) => [...prev, {...clickedItem, amount: 1}]);
    }

    // 3. setitems에 한번에쓰기 **************************8

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
    // 1. 일단 내 아이템들을 map 돌려서 클릭한 아이템이랑 해당아이템의 id가 같은지 확인하고, 같으면 -1을 해주고, 아니면 그냥 item을 배출
    // 2. 그리고 이 모든 과정은 filter를 돌린 each item의 amount 가 0이 아닐떄 시행하게 된다!
    // 라고 하게 되면 item의 length가 1을 안넘게 되면 카트 리스트에서 그냥 삭제  or amount가 1이 마이너스 된다는 로직
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
