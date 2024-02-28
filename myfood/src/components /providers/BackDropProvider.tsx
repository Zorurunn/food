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
import { EditFood } from "@/app/foodMenu/_component/EditFood";
import { CreateFood } from "@/app/foodMenu/_component/CreateFood";
import { CreateCategory } from "@/app/foodMenu/_component/CreateCategory";

type BackDropContextType = {
  toggleMyCart: (newOpen: boolean) => () => void;
  setOpenFoodDetail: Dispatch<SetStateAction<boolean>>;
  setOpenEditFood: Dispatch<SetStateAction<boolean>>;
  setOpenCreateFood: Dispatch<SetStateAction<boolean>>;
  setOpenCreateCategory: Dispatch<SetStateAction<boolean>>;
};

const BackDropContext = createContext<BackDropContextType>(
  {} as BackDropContextType
);

export const BackDropProvider = ({ children }: PropsWithChildren) => {
  const [openMyCart, setOpenMyCart] = useState(false);
  const [openFoodDetail, setOpenFoodDetail] = useState(false);
  const [openEditFood, setOpenEditFood] = useState(false);
  const [openCreateFood, setOpenCreateFood] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  const { selectedFood } = useData();

  const toggleMyCart = (newOpen: boolean) => () => {
    setOpenMyCart(newOpen);
  };

  return (
    <BackDropContext.Provider
      value={{
        toggleMyCart,
        setOpenFoodDetail,
        setOpenEditFood,
        setOpenCreateFood,
        setOpenCreateCategory,
      }}
    >
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

      {/* ADMIN */}
      {/* EDIT FOOD */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openEditFood}
      >
        {selectedFood && (
          <EditFood food={selectedFood} setOpen={setOpenEditFood} />
        )}
      </Backdrop>

      {/* CREATE FOOD */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openCreateFood}
      >
        <CreateFood setOpen={setOpenCreateFood} />
      </Backdrop>

      {/* CREATE CATEGORY */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openCreateCategory}
      >
        <CreateCategory setOpen={setOpenCreateCategory} />
      </Backdrop>
      {children}
    </BackDropContext.Provider>
  );
};

export const useBackDrop = () => useContext(BackDropContext);
