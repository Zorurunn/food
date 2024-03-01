"use client";

import { CustomInput, State, useData } from "@/components ";
import {
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { HeaderState } from "./HeaderState";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import { Foods } from "./Foods";
import { useAmount } from "@/components /providers/AmountProvider";
import { SubmitOrder } from "./SubmitOrder";

const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  apartment: yup.string().required(),
  additionalInformation: yup.string().required(),
  phoneNumber: yup.number().required(),
  radioSelect: yup.string().required(),
});

export const OrderFormik = () => {
  const [isNotConfirmed, setIsNotConfirmed] = useState(true);
  const { inCart } = useData();
  const { priceAmount } = useAmount();

  return (
    <Stack gap={4} alignItems={"center"} width={500}>
      {/* <Stack width={"100%"}>
        <HeaderState
          title="Захиалга баталгаажуулах"
          stepNumber={2}
          disabled={isNotConfirmed}
        />
      </Stack> */}
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
                cursor: "pointer",
              }}
              onClick={() => {
                setIsNotConfirmed(false);
              }}
            >
              Захиалах
            </Stack>
          </Stack>
        </Stack>
        <SubmitOrder />
      </Stack>
    </Stack>
  );
};
