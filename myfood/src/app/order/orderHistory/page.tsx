"use client";

import { CustomContainer, State, useData } from "@/components ";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { OrderHistories } from "./_component/OrderHistories";
import { basketFoodType, orderType } from "@/common";
import { OrderedFoods } from "./_component/OrderedFoods";
import { useOrderData } from "@/components /providers/OrderDataProvider";

export default function Page() {
  const [foods, setFoods] = useState<basketFoodType[]>();
  const [orderId, setOrderId] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>();

  const { myOrders } = useOrderData();
  useEffect(() => {
    if (!myOrders) return;
    if (myOrders.length > 0) {
      setFoods(myOrders[0].foods);
      setSelectedOrder(myOrders[0]._id);
    }
  }, [myOrders]);
  if (myOrders === undefined) {
    return (
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Loading...
      </Stack>
    );
  }

  if (myOrders.length === 0) {
    return (
      <Stack
        width={"100%"}
        height={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        you have no orders
      </Stack>
    );
  }

  return (
    <CustomContainer maxWidth="lg">
      {myOrders && (
        <Stack
          sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          marginY={4}
        >
          <Stack alignItems={"center"}>
            <OrderHistories
              setFoods={setFoods}
              setOrderId={setOrderId}
              selectedOrder={selectedOrder}
              setSelectedOrder={setSelectedOrder}
            />
          </Stack>
          <Stack alignItems={"center"}>
            <OrderedFoods foods={foods} orderId={orderId} />
          </Stack>
        </Stack>
      )}
    </CustomContainer>
  );
}
