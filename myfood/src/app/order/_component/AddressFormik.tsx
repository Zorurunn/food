"use client";

import { CustomInput, State, useData } from "@/components ";
import {
  FormControlLabel,
  MenuItem,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  HTMLInputTypeAttribute,
  useState,
} from "react";
import { HeaderState } from "./HeaderState";
import { useFormik } from "formik";
import * as yup from "yup";
type AddressFormikType = {
  handleBlur?:
    | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
  handleChange:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;

  // district
  districtName: string;
  districtValue: string | number;
  districtError?: boolean | undefined;

  // khoroo
  khorooName: string;
  khorooValue: string | number;
  khorooError?: boolean | undefined;

  // apartment
  apartmentName: string;
  apartmentValue: string | number;
  apartmentError?: boolean | undefined;

  // additionalInformation
  additionalInformationName: string;
  additionalInformationValue: string | number;
  additionalInformationError?: boolean | undefined;

  // phoneNUMBER
  phoneNumberName: string;
  phoneNumberValue: number | null;
  phoneNumberError?: boolean | undefined;
};

export const AddressFormik = (props: AddressFormikType) => {
  const {
    // district
    districtName,
    districtValue,
    districtError,

    // khoroo
    khorooName,
    khorooValue,
    khorooError,

    // apartment
    apartmentName,
    apartmentValue,
    apartmentError,

    // additionalInformation
    additionalInformationName,
    additionalInformationValue,
    additionalInformationError,

    // additionalInformation
    phoneNumberName,
    phoneNumberValue,
    phoneNumberError,

    handleChange,
    handleBlur,
  } = props;

  const { districts, khoroos, apartments, inCart } = useData();

  // const [value, setValue] = useState("female");

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setValue((event.target as HTMLInputElement).value);
  // };

  return (
    <Stack gap={4} alignItems={"center"} width={500}>
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
                  value={districtValue ?? "defaultValue"}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  error={districtError}
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
                      <MenuItem key={item._id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </CustomInput>
              )}
              {khoroos && (
                <CustomInput
                  name={khorooName}
                  value={khorooValue ?? "defaultValue"}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  error={khorooError}
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
                      <MenuItem key={item._id} value={item.name}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </CustomInput>
              )}
              {apartments && (
                <CustomInput
                  name={apartmentName}
                  value={apartmentValue ?? "defaultValue"}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  error={apartmentError}
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
                      <MenuItem key={item._id} value={item.name}>
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
            name={additionalInformationName}
            label={"Нэмэлт мэдээлэл"}
            placeHolder="Орц, давхар, орцны код ..."
            value={additionalInformationValue}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={additionalInformationError}
            size="medium"
            type="text"
            width={400}
            multiLine={true}
          />

          {/* PHONE NUMBER */}
          <CustomInput
            name={phoneNumberName}
            label={"Утасны дугаар *"}
            placeHolder="Утасны дугаараа оруулна уу"
            value={phoneNumberValue ?? ""}
            handleChange={handleChange}
            onBlur={handleBlur}
            error={phoneNumberError}
            size="medium"
            type="text"
            width={400}
          />

          {/* PAYMENT TYPE */}
          {/* <Stack>
            <Stack>Төлбөр төлөх </Stack>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="radioSelect"
              value={}
              onChange={(e) => {}}
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
      </Stack>
    </Stack>
  );
};
