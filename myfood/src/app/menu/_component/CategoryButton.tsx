"use client";
import { Stack, Typography } from "@mui/material";
import { categoryType, selectCategoryTypes } from "@/common";

export const CategoryButton = (props: selectCategoryTypes & categoryType) => {
  const { selectedCategory, setSelectedCategory, name, _id } = props;
  return (
    <Stack
      border={"1px solid"}
      borderColor={
        selectedCategory?._id === _id ? "primary.main" : "text.secondary"
      }
      borderRadius={5}
      padding={"10px 18px"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      sx={{
        backgroundColor: selectedCategory?._id === _id ? "primary.main" : null,
      }}
      onClick={() => {
        setSelectedCategory({ name, _id });
      }}
    >
      <Typography
        fontSize={16}
        fontWeight={600}
        color={selectedCategory?._id === _id ? "#fff" : "text.primary"}
        width="100%"
        height="100%"
        textAlign={"center"}
        sx={{ cursor: "pointer" }}
      >
        {name}
      </Typography>
    </Stack>
  );
};
