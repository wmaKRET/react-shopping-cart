import React, { useState } from "react";
import { useQuery } from "react-query";
// Components
import LinearPrress, { Badge, Drawer, Grid } from "@material-ui/core";
import { AddShoppingCart, ErrorOutline } from "@material-ui/icons";
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

  return <div className="App">hello world</div>;
};

export default App;
