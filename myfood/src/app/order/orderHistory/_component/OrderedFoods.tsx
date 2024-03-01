import { basketFoodType } from "@/common";
import { State } from "@/components ";
import { useOrderData } from "@/components /providers/OrderDataProvider";
import { Divider, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";

export const OrderedFoods = ({
  foods,
  orderId,
}: {
  foods: basketFoodType[] | undefined;
  orderId: string;
}) => {
  return (
    <Stack>
      <Stack alignItems={"center"} gap={4} width={400}>
        <Stack
          width={"100%"}
          boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
          padding={2}
          borderRadius={2}
          gap={2}
        >
          <Stack width={"100%"}>Захиалгын дэлгэрэнгүй #{orderId}</Stack>
          <Stack width={"100%"} sx={{ paddingX: 2 }} gap={3}>
            {foods &&
              foods.map((item) => {
                return (
                  <Stack width={"100%"} key={item._id} gap={2}>
                    <Stack
                      direction={"row"}
                      gap={2}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Stack> {item.name}</Stack>
                      <Stack> ({item.quantity})</Stack>
                    </Stack>
                    <Divider />
                  </Stack>
                );
              })}
          </Stack>
        </Stack>
      </Stack>

      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  );
};
