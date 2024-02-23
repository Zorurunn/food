import { CustomInput, HeadText } from "@/components ";
import { Close } from "@mui/icons-material";
import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

type foodDetailProps = {
  imgPath: string;
  name: string;
  price: number;
  discount: number;
  ingredients: string;
};
export type setOpenType = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

type twoTypes = foodDetailProps & setOpenType;
export const FoodDetail = (props: twoTypes) => {
  const { imgPath, name, price, discount, ingredients, setOpen } = props;

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
      <Stack position={"relative"} width={"100%"} paddingTop={"100%"}>
        <Image
          src={imgPath}
          alt="Breakfast"
          fill
          style={{ objectFit: "cover" }}
        />
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Stack gap={4} width={"90%"}>
          <Stack>
            <Stack alignItems={"flex-end"}>
              <Close
                onClick={() => {
                  setOpen(false);
                }}
                sx={{ color: "text.primary", cursor: "pointer" }}
              />
            </Stack>

            <Typography fontSize={20} fontWeight={800} color={"text.primary"}>
              {name}
            </Typography>
            <Typography fontSize={20} fontWeight={800} color={"primary.main"}>
              {price}₮
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
                    // border: "1px solid",
                    // borderColor: "text.primary",
                  },
                }}
              >
                <Typography fontSize={30} width={"100%"}>
                  -
                </Typography>
              </Button>
              <Typography color={"text.primary"}>Тоо</Typography>
              <Button
                sx={{
                  backgroundColor: "primary.main",
                  width: 40,
                  color: "#fff",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    color: "text.primary",
                    // border: "1px solid",
                    // borderColor: "text.primary",
                  },
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
                  // border: "1px solid",
                  borderColor: "text.primary",
                },
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
