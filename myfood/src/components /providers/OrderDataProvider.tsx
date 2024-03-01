"use client";

import {
  api,
  categoryType,
  foodType,
  orderType,
  userUpdateProps,
} from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Backdrop, Stack, Typography } from "@mui/material";
import { useData } from "..";

type OrderContextType = {
  createOrder: (props: orderType) => Promise<void>;
  getOrders: () => Promise<void>;
  myOrders: orderType[] | undefined;
};

const OrderContext = createContext<OrderContextType>({} as OrderContextType);

export const OrderDataProvider = ({ children }: PropsWithChildren) => {
  const [myOrders, setMyOrders] = useState<orderType[]>();
  const [refresh, setRefresh] = useState(0);

  // GET ORDERS
  const getOrders = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await api.get("/getOrders", {
        headers: {
          Authorization: token,
        },
      });
      console.log("GET ORDERS:", res.data);

      setMyOrders(res.data);
    } catch (error) {
      console.log("in get all districts() function error:", error);
    }
  };

  // CREATE ORDER
  const createOrder = async (props: orderType) => {
    const { deliveryAddress, foods } = props;

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/createOrder",
        {
          deliveryAddress,
          foods,
          createdAt: new Date(),
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("Request result:", res.data);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // USE EFFECT
  useEffect(() => {
    getOrders();
  }, [refresh]);
  return (
    <OrderContext.Provider value={{ createOrder, getOrders, myOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderData = () => useContext(OrderContext);
