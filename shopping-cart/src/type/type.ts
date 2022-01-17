export type DataType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export type ItemType = {
  item: DataType;
  AddToCart: (clickedItem: DataType) => void;
};
