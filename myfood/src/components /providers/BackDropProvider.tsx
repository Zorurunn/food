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
import { setOpenType, useData } from "..";
import { Backdrop, Drawer, Stack, Typography } from "@mui/material";
import { Really } from "@/app/userProfile/_components/Really";
import { Button } from "@mui/base";
import { MyCart } from "../orderDetail/MyCart";

type BackDropContextType = {
  // confirm: (title: string, callback: () => Promise<void>) => void;
  // setIsDisplay: Dispatch<SetStateAction<boolean>>;
  toggleDrawer: (newOpen: boolean) => () => void;
};

const BackDropContext = createContext<BackDropContextType>(
  {} as BackDropContextType
);

export const BackDropProvider = ({ children }: PropsWithChildren) => {
  const [openMyCart, setOpenMyCart] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMyCart(newOpen);
  };

  return (
    <BackDropContext.Provider value={{ toggleDrawer }}>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>

      {/* MY CART */}
      <Drawer open={openMyCart} onClose={toggleDrawer(false)} anchor="right">
        <MyCart toggleDrawer={toggleDrawer} />
      </Drawer>

      {children}
    </BackDropContext.Provider>
  );
};

export const useBackDrop = () => useContext(BackDropContext);
