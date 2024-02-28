import { useData } from "@/components ";
import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { InCartFood } from "./InCartFood";
import { useAmount } from "../providers/AmountProvider";

export const OrderDetail = () => {
  const { priceAmount } = useAmount();
  const { inCart } = useData();

  return (
    <Stack gap={2}>
      {inCart &&
        inCart.map((item) => {
          return (
            <Stack gap={2} key={item.food._id}>
              <Divider></Divider>
              <InCartFood {...item} />
            </Stack>
          );
        })}
      <Stack
        height={200}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        <Stack
          width={"100%"}
          direction={"row"}
          justifyContent={"space-between"}
          padding={2}
          height={80}
        >
          <Stack>
            <Typography fontSize={18} color={"text.secondary"}>
              Нийт төлөх дүн
            </Typography>
            <Typography fontSize={18} fontWeight={800}>
              {priceAmount && priceAmount}₮
            </Typography>
          </Stack>
          <Stack
            width={"50% "}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "5px",
            }}
          >
            Захиалах
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
