"use client";

import { useData } from "@/components ";
import { Stack, Typography, Button } from "@mui/material";
import { useState } from "react";
import { useAmount } from "@/components /providers/AmountProvider";

export const SubmitOrder = () => {
  const [isNotConfirmed, setIsNotConfirmed] = useState(true);
  const { inCart } = useData();
  const { priceAmount } = useAmount();

  return (
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
            Total amount
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
            cursor: "pointer",
          }}
          onClick={() => {
            setIsNotConfirmed(false);
            // addressFormikSubmit();
          }}
        >
          Create order
        </Stack>
      </Stack>
    </Stack>
  );
};
