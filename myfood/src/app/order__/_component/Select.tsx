"use client";

import { State } from "@/components ";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import * as yup from "yup";

type SelectProps = {
  name: string;
  placeHolder: string;
  menuItem: string[];
  type: HTMLInputTypeAttribute;
  handleChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  adornment?: "end" | "start";
  size?: "small" | "medium";
  width: number;
  borderColor?: string;
  id?: string;
};

const validationSchema = yup.object({
  district: yup.string().required(),
});
export default function Dashboard() {
  const formik = useFormik({
    initialValues: {
      district: "Дүүрэг сонгоно уу",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  {
    console.log(formik.values.district);
  }

  return (
    <Stack>
      <Stack borderRadius={1} boxShadow={"4px 4px 4px rgba(0, 0, 0, 0.1)"}>
        <Select
          name="district"
          placeholder="Дүүрэг сонгоно уу"
          value={formik.values.district}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.district && Boolean(formik.errors.district)}
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon />
            </InputAdornment>
          }
        >
          <MenuItem value="Дүүрэг сонгоно уу" disabled hidden>
            Дүүрэг сонгоно уу
          </MenuItem>
          <MenuItem value={"10"}>Баянзүрх дүүрэг</MenuItem>
          <MenuItem value={"10"}>Хан-Уул дүүрэг</MenuItem>
          <MenuItem value={"10"}>Баянзүрх дүүрэг</MenuItem>
          <MenuItem value={"20"}>Хан-Уул дүүрэг</MenuItem>
          <MenuItem value={"30"}>Баянзүрх дүүрэг</MenuItem>
        </Select>
      </Stack>
    </Stack>
  );
}
