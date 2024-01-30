"use client";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";
type CustomInputProps = {
  label: string;
  value: string;
  placeHolder: string;
  type: HTMLInputTypeAttribute;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

export const CustomInput = (props: CustomInputProps) => {
  const { value, label, handleChange, type = "text", placeHolder } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Stack>
      <Typography>{label}</Typography>
      <TextField
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        type={type === "password" && showPassword ? "text" : type}
        sx={{
          bgcolor: "#ecedf0",
          width: 400,
        }}
        inputProps={{
          style: {
            padding: "14px 16px",
          },
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
};
