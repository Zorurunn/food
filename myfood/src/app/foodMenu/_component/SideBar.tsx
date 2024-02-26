import { CustomContainer, setOpenType, useData } from "@/components ";
import { Add, MoreVert } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { SideLine, selectCategoryTypes } from "./SideLine";
import { CategoryButton } from "@/app/menu/_component/CategoryButton";
import { ChangeEvent, useState } from "react";
import { api } from "@/common";

// const categories = ["breakfast", "soup", "main course", "desserts"];
export const SideBar = (props: selectCategoryTypes & setOpenType) => {
  const { categories, deleteCategory } = useData();
  const { selectedCategory, setSelectedCategory, setOpen } = props;

  return (
    <Stack gap={4}>
      <Stack fontSize={22} fontWeight={700}>
        Food menu
      </Stack>
      <Stack gap={2}>
        {categories &&
          categories.map((item) => {
            return (
              <SideLine
                {...item}
                key={item._id}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            );
          })}
        <Stack
          direction={"row"}
          border={"1px solid"}
          borderColor={"text.secondary"}
          borderRadius={2}
          padding={1}
          alignItems={"center"}
          gap={1}
        >
          <Add />
          <Typography
            sx={{ cursor: "pointer" }}
            color={"text.secondary"}
            onClick={() => {
              setOpen(true);
            }}
          >
            Create new category
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
