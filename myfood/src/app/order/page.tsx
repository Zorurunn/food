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
import * as yup from "yup";
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
      <Grid container spacing={2} sx={{ height: "200px" }}>
        <Grid item xs={6}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
          >
            <State />
            <Stack>
              <Typography color={"text.secondary"} fontSize={14}>
                Алхам 1
              </Typography>
              <Typography fontSize={20}>Хаягийн мэдээлэл оруулах</Typography>
              <Typography fontSize={16} color={"#0468C8"}>
                Хүлээгдэж байна
              </Typography>
            </Stack>
          </Stack>
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
              <MenuItem value={"10"}>Ten</MenuItem>
              <MenuItem value={"20"}>Twenty</MenuItem>
              <MenuItem value={"30"}>Thirty</MenuItem>
            </Select>
          </Stack>
          <Button
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            a
          </Button>
        </Grid>

        <Grid item xs={6}>
          right
        </Grid>
      </Grid>
    </Stack>
  );
}
