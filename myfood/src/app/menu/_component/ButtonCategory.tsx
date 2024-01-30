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

export const ButtonCategory = ({
  title,
  selectedOption,
  handleOptionChange,
  setSelectedOption,
}: {
  title: string;
  selectedOption: string;
  handleOptionChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
  setSelectedOption: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack
      border={"1px solid"}
      borderColor={selectedOption === title ? "primary.main" : "grey.400"}
      borderRadius={5}
      padding={"10px 18px"}
      alignItems={"center"}
      width={"100%"}
      position={"relative"}
      sx={{
        backgroundColor: selectedOption === title ? "primary.main" : null,
      }}
    >
      <Typography
        fontSize={16}
        fontWeight={600}
        color={selectedOption === title ? "#fff" : "text.primary"}
        onClick={() => {
          setSelectedOption(title);
        }}
        width="100%"
        height="100%"
        textAlign={"center"}
        sx={{ cursor: "pointer" }}
      >
        {title}
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
