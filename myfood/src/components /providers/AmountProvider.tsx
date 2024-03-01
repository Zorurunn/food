"use client";

import { api, categoryType, userUpdateProps } from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { FoodDetail, useData } from "..";
import { Backdrop, Drawer, Stack, Typography } from "@mui/material";
import { Really } from "@/app/userProfile/_components/Really";
import { Button } from "@mui/base";
import { MyCart } from "../orderDetail/MyCart";

type AmountContextType = {
  orderAmount: number | undefined;
  priceAmount: number | undefined;
};

const AmountContext = createContext<AmountContextType>({} as AmountContextType);

export const AmountProvider = ({ children }: PropsWithChildren) => {
  const { inCart } = useData();
  const [orderAmount, setOrderAmount] = useState<number>();
  const [priceAmount, setPriceAmount] = useState<number>();

  useEffect(() => {
    if (!inCart) return;

    // Set order amount
    const quantityArray = inCart.map((item) => {
      return item.quantity;
    });
    const quantityResult = quantityArray.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    setOrderAmount(quantityResult);

    // Set price amount
    const priceArray = inCart.map((item) => {
      return item.price * item.quantity;
    });

    const priceResult = priceArray.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    setPriceAmount(priceResult);
  }, [inCart]);

  return (
    <AmountContext.Provider value={{ orderAmount, priceAmount }}>
      {children}
    </AmountContext.Provider>
  );
};

export const useAmount = () => useContext(AmountContext);
