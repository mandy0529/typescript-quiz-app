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

export type CartType = {
  item: DataType[];
  AddToCart: (clickedItem: DataType) => void;
  removeItem: (id: number) => void;
};

export type CartItemType = {
  item: DataType;
  AddToCart: (clickedItem: DataType) => void;
  removeItem: (id: number) => void;
};
