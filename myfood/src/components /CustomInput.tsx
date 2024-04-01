"use client";
import Switch from "@mui/material/Switch";

import {
  Search,
  VisibilityOff,
  Visibility,
  LocationOn,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
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
  value: string | number | undefined;
  name?: string;
  label?: string;
  placeHolder?: string;
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
  select?: boolean;
  iconType?: "location" | "search";
  multiLine?: boolean;
  switchable?: boolean;
} & TextFieldProps;

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
    children,
    select = false,
    iconType = "search",
    multiLine = false,
    switchable = false,
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const [enableSwitch, setEnableSwitch] = useState(true);
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSearch = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Typography color={"text.primary"}>{label}</Typography>
        {switchable && (
          <Switch
            onChange={() => {
              setEnableSwitch((prev) => !prev);
            }}
          />
        )}
      </Stack>
      <TextField
        disabled={switchable && enableSwitch}
        name={name}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeHolder}
        onBlur={onBlur}
        error={error}
        helperText={isError && isTouched && helperText}
        type={type === "password" && showPassword ? "text" : type}
        select={select}
        multiline={multiLine}
        rows={multiLine ? 4 : 0}
        sx={{
          visibility: switchable && enableSwitch ? "hidden" : "visible",
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
          sx: {
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
              {
                <IconButton onClick={handleSearch}>
                  {iconType === "search" ? <Search /> : <LocationOn />}
                </IconButton>
              }
            </InputAdornment>
          ),
        }}
      >
        {children}
      </TextField>
    </Stack>
  );
};
