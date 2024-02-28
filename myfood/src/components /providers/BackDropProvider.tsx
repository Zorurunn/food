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

type BackDropContextType = {
  // confirm: (title: string, callback: () => Promise<void>) => void;
  // setIsDisplay: Dispatch<SetStateAction<boolean>>;
  toggleMyCart: (newOpen: boolean) => () => void;
  setOpenFoodDetail: Dispatch<SetStateAction<boolean>>;
};

const BackDropContext = createContext<BackDropContextType>(
  {} as BackDropContextType
);

export const BackDropProvider = ({ children }: PropsWithChildren) => {
  const [openMyCart, setOpenMyCart] = useState(false);
  const [openFoodDetail, setOpenFoodDetail] = useState(false);
  const { selectedFood } = useData();

  const toggleMyCart = (newOpen: boolean) => () => {
    setOpenMyCart(newOpen);
  };

  return (
    <BackDropContext.Provider value={{ toggleMyCart, setOpenFoodDetail }}>
      <Button onClick={toggleMyCart(true)}>Open drawer</Button>

      {/* MY CART */}
      <Drawer open={openMyCart} onClose={toggleMyCart(false)} anchor="right">
        <MyCart toggleDrawer={toggleMyCart} />
      </Drawer>

      {/* FOOD DETAIL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openFoodDetail}
      >
        {selectedFood && (
          <FoodDetail food={selectedFood} setOpen={setOpenFoodDetail} />
        )}
      </Backdrop>

      {children}
    </BackDropContext.Provider>
  );
};

export const useBackDrop = () => useContext(BackDropContext);
