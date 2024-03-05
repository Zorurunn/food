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
import { FoodDetail, Login, useData } from "..";
import {
  Backdrop,
  CircularProgress,
  Drawer,
  Stack,
  Typography,
} from "@mui/material";
import { Really } from "@/app/userProfile/_components/Really";
import { MyCart } from "../orderDetail/MyCart";
import { EditFood } from "@/app/foodMenu/_component/EditFood";
import { CreateFood } from "@/app/foodMenu/_component/CreateFood";
import { CreateCategory } from "@/app/foodMenu/_component/CreateCategory";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

type BackDropContextType = {
  toggleMyCart: (newOpen: boolean) => () => void;
  setOpenFoodDetail: Dispatch<SetStateAction<boolean>>;
  setOpenEditFood: Dispatch<SetStateAction<boolean>>;
  setOpenCreateFood: Dispatch<SetStateAction<boolean>>;
  setOpenCreateCategory: Dispatch<SetStateAction<boolean>>;
  setOpenMyCart: Dispatch<SetStateAction<boolean>>;
  setOpenLogin: Dispatch<SetStateAction<boolean>>;
  setOpenLoading: Dispatch<SetStateAction<boolean>>;
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
  const [openLogIn, setOpenLogin] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
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
        setOpenMyCart,
        setOpenLogin,
        setOpenLoading,
      }}
    >
      {/* <Button onClick={toggleMyCart(true)}>Open drawer</Button> */}

      {/* MY CART */}
      <Drawer
        open={openMyCart}
        onClose={() => {
          setOpenMyCart(false);
        }}
        anchor="right"
      >
        <MyCart />
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

      {/* SIGN IN */}
      <Modal
        open={openLogIn}
        onClose={() => {
          setOpenLogin(false);
        }}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Stack>
          <Login />
        </Stack>
      </Modal>

      {/* LOADING */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={openLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {children}
    </BackDropContext.Provider>
  );
};

export const useBackDrop = () => useContext(BackDropContext);
