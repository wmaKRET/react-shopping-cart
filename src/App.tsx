import React, { useState } from "react";
import { useQuery } from "react-query";
// Components
import Item from "./components/Item";
import LinearPrress, {
  Badge,
  CircularProgress,
  Drawer,
  Grid,
  LinearProgress,
} from "@material-ui/core";
import { AddShoppingCart, ErrorOutline, WrapText } from "@material-ui/icons";
// Styles
import { Wrapper } from "./App.styles";
// Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery(["products"], getProducts);

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error)
    return (
      <div>
        <pre>{error}</pre>
      </div>
    );

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data.map((item: CartItemType) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
