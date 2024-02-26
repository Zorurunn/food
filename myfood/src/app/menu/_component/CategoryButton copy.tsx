"use client";
import { Stack, TextField, Typography } from "@mui/material";
import { useInput } from "@mui/base/useInput";
import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { categoryType, selectCategoryTypes } from "@/common";

export const CategoryButton = (props: selectCategoryTypes & categoryType) => {
  const { selectedCategory, setSelectedCategory, name, _id } = props;
  return (
    <Stack
      border={"1px solid"}
      borderColor={selectedCategory === name ? "primary.main" : "grey.400"}
      borderRadius={5}
      padding={"10px 18px"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      sx={{
        backgroundColor: selectedCategory === name ? "primary.main" : null,
      }}
    >
      <Typography
        fontSize={16}
        fontWeight={600}
        color={selectedCategory === name ? "#fff" : "text.primary"}
        onClick={() => {
          setSelectedCategory(name);
        }}
        width="100%"
        height="100%"
        textAlign={"center"}
        sx={{ cursor: "pointer" }}
      >
        {name}
      </Typography>
      {/* <TextField
        onChange={handleOptionChange}
        value={title}
        // aria-checked={selectedOption === title}
        name="category"
        type={"radio"}
        fullWidth
        sx={{
          backgroundColor: "transparent",
          // opacity: 0,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        inputProps={{
          style: {
            height: "100%",
          },
        }}
      /> */}
    </Stack>
  );
};
