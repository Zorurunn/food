import { CustomContainer } from "@/components ";
import { Add, MoreVert } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { SideLine, selectCategoryTypes } from "./SideLine";
import { ButtonCategory } from "@/app/menu/_component/CategoryButton";
import { ChangeEvent, useState } from "react";
import { api } from "@/common";

const categories = ["breakfast", "soup", "main course", "desserts"];
export const RightTop = (props: selectCategoryTypes) => {
  const { selectedCategory } = props;

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography fontSize={22} fontWeight={700}>
        {selectedCategory}
      </Typography>
      <Stack
        width={130}
        fontSize={16}
        color={"#fff"}
        sx={{
          backgroundColor: "primary.main",
          borderRadius: 2,
          cursor: "pointer",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Add new food
      </Stack>
    </Stack>
  );
};
