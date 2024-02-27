"use client";

import { CustomContainer, State } from "@/components ";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  bair: yup.string().required(),
});
export default function Dashboard() {
  const formik = useFormik({
    initialValues: {
      district: "Дүүрэг сонгоно уу",
      khoroo: "Дүүрэг сонгоно уу",
      bair: "Дүүрэг сонгоно уу",
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
    <CustomContainer maxWidth="lg">
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
            <Stack
              borderRadius={1}
              boxShadow={"4px 4px 4px rgba(0, 0, 0, 0.1)"}
              gap={2}
            >
              <Select
                name="district"
                placeholder="Дүүрэг сонгоно уу"
                value={formik.values.district}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.district && Boolean(formik.errors.district)
                }
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOnIcon />
                  </InputAdornment>
                }
              >
                <MenuItem
                  value="Дүүрэг сонгоно уу"
                  disabled
                  hidden
                  selected={true}
                >
                  Дүүрэг сонгоно уу
                </MenuItem>
                <MenuItem value={"10"}>Баянзүрх дүүрэг</MenuItem>
                <MenuItem value={"10"}>Хан-Уул дүүрэг</MenuItem>
                <MenuItem value={"10"}>Баянзүрх дүүрэг</MenuItem>
                <MenuItem value={"20"}>Хан-Уул дүүрэг</MenuItem>
                <MenuItem value={"30"}>Баянзүрх дүүрэг</MenuItem>
              </Select>

              <TextareaAutosize
                aria-label="asdskbhfksejgfewkjfgu"
                minRows={3}
                placeholder="Орц, давхар, орцны код ..."
              />
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
    </CustomContainer>
  );
}
