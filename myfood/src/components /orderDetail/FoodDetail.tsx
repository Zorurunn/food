import { foodType } from "@/common";
import { useData } from "@/components ";
import { Close } from "@mui/icons-material";
import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useAmount } from "../providers/AmountProvider";
import { DiscountedImage } from "../DiscountedImage";

export const FoodDetail = ({
  food,
  setOpen,
}: {
  food: foodType;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [count, setCount] = useState<number>(1);
  const { imgPath, name, price, discount, ingredients, _id, category } = food;
  const { addCart } = useData();
  const { discountCalculate } = useAmount();

  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        backgroundColor: "#fff",
        borderRadius: 5,
      }}
      width={"100%"}
      maxWidth={800}
      gap={4}
      padding={5}
    >
      <DiscountedImage imgPath={imgPath} discount={discount} />
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack gap={4} width={"90%"}>
          <Stack>
            <Stack alignItems={"flex-end"}>
              <Close
                onClick={() => {
                  setOpen(false);
                  setCount(1);
                }}
                sx={{ color: "text.primary", cursor: "pointer" }}
              />
            </Stack>

            <Typography fontSize={20} fontWeight={800} color={"text.primary"}>
              {name}
            </Typography>
            <Typography fontSize={20} fontWeight={800} color={"primary.main"}>
              {discount
                ? discountCalculate({ price: price, discount: discount })
                : price}
              ₮
            </Typography>
          </Stack>
          <Stack gap={1.2}>
            <Typography fontSize={20} fontWeight={800} color={"text.primary"}>
              Орц
            </Typography>
            <Typography
              color={"text.secondary"}
              padding={"8px"}
              borderRadius={2}
              sx={{ backgroundColor: "grey.200" }}
            >
              {ingredients}
            </Typography>
          </Stack>
          <Stack gap={4}>
            <Typography fontSize={20} fontWeight={800} color={"text.primary"}>
              Тоо
            </Typography>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                sx={{
                  backgroundColor: "primary.main",
                  width: 40,
                  color: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    color: "text.primary",
                  },
                }}
                onClick={() => {
                  if (count === 1) return;
                  setCount((prev) => prev - 1);
                }}
              >
                <Typography fontSize={30} width={"100%"}>
                  -
                </Typography>
              </Button>
              <Typography color={"text.primary"}>{count}</Typography>
              <Button
                sx={{
                  backgroundColor: "primary.main",
                  width: 40,
                  color: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    color: "text.primary",
                  },
                }}
                onClick={() => {
                  setCount((prev) => prev + 1);
                }}
              >
                <Typography fontSize={30} width={"100%"}>
                  +
                </Typography>
              </Button>
            </Stack>
            <Button
              sx={{
                backgroundColor: "primary.main",
                width: "100%",
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                ":hover": {
                  color: "text.primary",
                  borderColor: "text.primary",
                },
              }}
              onClick={() => {
                addCart({
                  imgPath,
                  name,
                  price,
                  discount,
                  ingredients,
                  _id,
                  quantity: count,
                });
                setCount(1);
                setOpen(false);
              }}
            >
              <Typography fontSize={14} width={"100%"}>
                Сагслах
              </Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
