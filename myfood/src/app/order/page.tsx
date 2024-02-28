"use client";

import { CustomContainer, CustomInput, State, useData } from "@/components ";
import { MyCart } from "@/components /orderDetail/MyCart";
import { OrderDetail } from "@/components /orderDetail/OrderDetail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { Formik, useFormik } from "formik";
import { ST } from "next/dist/shared/lib/utils";
import * as yup from "yup";
const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  apartment: yup.string().required(),
  additionalInformation: yup.string().required(),
  phoneNumber: yup.number().required(),
});
export default function Dashboard() {
  const { districts, khoroos, apartments } = useData();
  const formik = useFormik({
    initialValues: {
      district: "defaultValue",
      khoroo: "defaultValue",
      apartment: "defaultValue",
      additionalInformation: "",
      phoneNumber: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <CustomContainer maxWidth="lg">
      <Stack>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Stack gap={4}>
              <Stack
                direction={"row"}
                // justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <State />
                <Stack>
                  <Typography color={"text.secondary"} fontSize={14}>
                    Алхам 1
                  </Typography>
                  <Typography fontSize={20}>
                    Хаягийн мэдээлэл оруулах
                  </Typography>
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
                <Stack>Хаяг аа оруулна уу</Stack>
                {districts && (
                  <CustomInput
                    name="district"
                    value={formik.values.district ?? "defaultValue"}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.district && Boolean(formik.errors.district)
                    }
                    size="medium"
                    type="text"
                    width={400}
                    select={true}
                    adornment="start"
                    iconType="location"
                  >
                    <MenuItem value={"defaultValue"} disabled>
                      Дүүрэг сонгоно уу
                    </MenuItem>
                    {districts.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </CustomInput>
                )}
                {khoroos && (
                  <CustomInput
                    name="khoroo"
                    value={formik.values.khoroo ?? "defaultValue"}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.khoroo && Boolean(formik.errors.khoroo)
                    }
                    size="medium"
                    type="text"
                    width={400}
                    select={true}
                    adornment="start"
                    iconType="location"
                  >
                    <MenuItem value={"defaultValue"} disabled>
                      Хороо сонгоно уу
                    </MenuItem>
                    {khoroos.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </CustomInput>
                )}
                {apartments && (
                  <CustomInput
                    name="apartment"
                    value={formik.values.apartment ?? "defaultValue"}
                    handleChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.apartment &&
                      Boolean(formik.errors.apartment)
                    }
                    size="medium"
                    type="text"
                    width={400}
                    select={true}
                    adornment="start"
                    iconType="location"
                  >
                    <MenuItem value={"defaultValue"} disabled>
                      Байр гудамж сонгоно уу
                    </MenuItem>
                    {apartments.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                  </CustomInput>
                )}

                <CustomInput
                  name="additionalInformation"
                  label={"Нэмэлт мэдээлэл"}
                  placeHolder="Орц, давхар, орцны код ..."
                  value={formik.values.additionalInformation}
                  handleChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.additionalInformation &&
                    Boolean(formik.errors.additionalInformation)
                  }
                  size="medium"
                  type="text"
                  width={400}
                  multiLine={true}
                ></CustomInput>
                <CustomInput
                  name="phoneNumber"
                  label={"Утасны дугаар *"}
                  placeHolder="Утасны дугаараа оруулна уу"
                  value={formik.values.phoneNumber ?? ""}
                  handleChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  size="medium"
                  type="text"
                  width={400}
                />
              </Stack>
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
            <Stack
              direction={"row"}
              // justifyContent={"center"}
              alignItems={"center"}
              gap={2}
            >
              <State />
              <Stack>
                <Typography color={"text.secondary"} fontSize={14}>
                  Алхам 2
                </Typography>
                <Typography fontSize={20}>Захиалга баталгаажуулах</Typography>
                <Typography fontSize={16} color={"#0468C8"}>
                  Хүлээгдэж байна
                </Typography>
              </Stack>
            </Stack>
            <OrderDetail />
          </Grid>
        </Grid>
      </Stack>
    </CustomContainer>
  );
}
