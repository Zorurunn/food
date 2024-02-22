"use client";
import { Search, VisibilityOff, Visibility } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  useState,
} from "react";
type CustomInputProps = {
  onBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  error?: boolean | undefined;
  value: string;
  name?: string;
  label?: string;
  placeHolder: string;
  type: HTMLInputTypeAttribute;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  adornment?: "end" | "start";
  size?: "small" | "medium";
  width: number;
  borderColor?: string;
  id?: string;
  isError?: string;
  isTouched?: boolean;
  helperText?: string;
};

export const CustomInput = (props: CustomInputProps) => {
  const {
    onBlur,
    error,
    name,
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
    isError,
    isTouched,
    helperText,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };

  //   <Select
  //   name="district"
  //   placeholder="Дүүрэг сонгоно уу"
  //   value={formik.values.district}
  //   onChange={formik.handleChange}
  //   onBlur={formik.handleBlur}
  //   error={formik.touched.district && Boolean(formik.errors.district)}
  //   startAdornment={
  //     <InputAdornment position="start">
  //       <LocationOnIcon />
  //     </InputAdornment>
  //   }
  // >
  return (
    <Stack>
      <Typography color={"text.primary"}>{label}</Typography>
      <TextField
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        error={error}
        helperText={isError && isTouched && helperText}
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
