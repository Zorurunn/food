"use client";

import { CustomContainer, State, useData } from "@/components ";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { AddressFormik } from "./_component/AddressFormik";
import { HeaderState } from "./_component/HeaderState";
import { OrderFormik } from "./_component/OrderFormik";

export default function Order() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
        marginY={4}
      >
        <Stack alignItems={"center"}>
          <AddressFormik />
        </Stack>
        <Stack alignItems={"center"}>
          <OrderFormik />
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
