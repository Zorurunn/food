"use client";
import { Search, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
type CustomInputProps = {
  label?: string;
  value?: string;
  placeHolder: string;
  type: HTMLInputTypeAttribute;
  handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  adornment?: "end" | "start";
  size?: "small" | "medium";
  width: number;
  borderColor?: string;
  id?: string;
};

export const CustomInput = (props: CustomInputProps) => {
  const {
    value,
    label,
    handleChange,
    type = "text",
    placeHolder,
    adornment,
    size,
    width,
    borderColor,
    id,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack>
      <Typography>{label}</Typography>
      <TextField
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          "& fieldset": {
            borderColor: borderColor,
          },
          width: width,
          backgroundColor: "transparent",
        }}
        inputProps={{
          style: {
            padding: size === "small" ? "3px 8px" : "14px 16px",
          },
        }}
        InputProps={{
          style: {
            borderColor: "red",
          },
          endAdornment: adornment === "end" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
          startAdornment: adornment === "start" && (
            <InputAdornment position="start">
              <IconButton onClick={handleSearch}>{<Search />}</IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
