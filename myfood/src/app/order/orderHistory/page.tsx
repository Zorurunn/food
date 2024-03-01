"use client";

import { CustomContainer, State, useData } from "@/components ";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { OrderHistories } from "./_component/OrderHistories";
import { basketFoodType } from "@/common";
import { OrderedFoods } from "./_component/OrderedFoods";
import { useOrderData } from "@/components /providers/OrderDataProvider";

export default function Page() {
  const [foods, setFoods] = useState<basketFoodType[]>();
  const [orderId, setOrderId] = useState<string>("");
  return (
    <CustomContainer maxWidth="lg">
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
        marginY={4}
      >
        <Stack alignItems={"center"}>
          <OrderHistories setFoods={setFoods} setOrderId={setOrderId} />
        </Stack>
        <Stack alignItems={"center"}>
          <OrderedFoods foods={foods} orderId={orderId} />
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
