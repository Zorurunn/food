"use client";

import { CustomContainer, State, useData } from "@/components ";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { OrderHistories } from "./_component/OrderHistories";

export default function Page() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
        marginY={4}
      >
        <Stack alignItems={"center"}>
          <OrderHistories />
        </Stack>
        <Stack alignItems={"center"}>2</Stack>
      </Stack>
    </CustomContainer>
  );
}
