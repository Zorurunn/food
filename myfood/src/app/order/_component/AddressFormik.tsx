"use client";

import { CustomInput, State, useData } from "@/components ";
import {
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { useState } from "react";
import { HeaderState } from "./HeaderState";

const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  apartment: yup.string().required(),
  additionalInformation: yup.string(),
  phoneNumber: yup.number().required(),
  // radioSelect: yup.string().required(),
});

export const AddressFormik = () => {
  const { districts, khoroos, apartments, inCart } = useData();
  const formik = useFormik({
    initialValues: {
      district: "defaultValue",
      khoroo: "defaultValue",
      apartment: "defaultValue",
      additionalInformation: "",
      phoneNumber: null,
      // radioSelect: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // formik.values.radioSelect = value;
      console.log(values);
    },
  });

  const [value, setValue] = useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Stack gap={4} alignItems={"center"} width={500}>
      {/* HEADER */}
      <Stack width={"100%"}>
        <HeaderState
          title="Хаягийн мэдээлэл оруулах"
          stepNumber={1}
          disabled={!formik.isValid || !formik.dirty}
        />
      </Stack>
      {/* FOMIK FIELDS */}
      <Stack
        width={"100%"}
        height={700}
        boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
        alignItems={"center"}
        justifyContent={"center"}
        padding={2}
        borderRadius={2}
        gap={2}
      >
        <Stack gap={2}>
          {/* ADDRESS INFORMATION */}
          <Stack>
            <Stack>Хаяг аа оруулна уу</Stack>
            <Stack gap={2}>
              {districts && (
                <CustomInput
                  name="district"
                  value={formik.values.district ?? "defaultValue"}
                  handleChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    (formik.touched.district &&
                      Boolean(formik.errors.district)) ||
                    (formik.touched.district &&
                      formik.values.district == formik.initialValues.district)
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
                    (formik.touched.khoroo && Boolean(formik.errors.khoroo)) ||
                    (formik.touched.khoroo &&
                      formik.values.khoroo == formik.initialValues.khoroo)
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
                    (formik.touched.apartment &&
                      Boolean(formik.errors.apartment)) ||
                    (formik.touched.apartment &&
                      formik.values.apartment == formik.initialValues.apartment)
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
            </Stack>
          </Stack>

          {/* ADDITIONAL INFORMATION */}
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
          />

          {/* PHONE NUMBER */}
          <CustomInput
            name="phoneNumber"
            label={"Утасны дугаар *"}
            placeHolder="Утасны дугаараа оруулна уу"
            value={formik.values.phoneNumber ?? ""}
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            size="medium"
            type="text"
            width={400}
          />

          {/* PAYMENT TYPE */}
          {/* <Stack>
            <Stack>Төлбөр төлөх </Stack>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              // value={value}
              // onChange={handleChange}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                width={400}
              >
                <FormControlLabel
                  value="cash"
                  control={<Radio />}
                  label="Бэлнээр"
                />
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Картаар"
                />
              </Stack>
            </RadioGroup>
          </Stack> */}
        </Stack>
        <Button
          onClick={() => {
            formik.handleSubmit();
          }}
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};
