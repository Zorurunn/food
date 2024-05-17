"use client";

import { useData } from "@/components ";
import { Stack, Typography, Button } from "@mui/material";
import { FormEvent } from "react";
import { Foods } from "./Foods";
import { useAmount } from "@/components /providers/AmountProvider";

export const OrderFormik = ({
  submitFormik,
  disable,
}: {
  submitFormik: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  disable: boolean;
}) => {
  const { inCart } = useData();
  const { priceAmount } = useAmount();

  return (
    <Stack gap={4} alignItems={"center"} width={500}>
      <Stack
        width={"100%"}
        height={700}
        boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        borderRadius={2}
        gap={3}
      >
        <Stack flexGrow={1} overflow={"scroll"} width={"100%"}>
          {inCart.length ? <Foods /> : "no food"}
        </Stack>
        {/* FOOTER */}
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

            <Button
              sx={{
                textTransform: "none",
                backgroundColor: disable ? "primary.light" : "primary.main",
                color: "#fff",
                ":hover": {
                  color: "text.primary",
                },
                width: "50%",
              }}
              onClick={() => {
                submitFormik();
              }}
              disabled={disable || inCart.length === 0}
            >
              create order
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
