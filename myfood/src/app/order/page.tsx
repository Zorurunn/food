"use client";

import { CustomContainer, Notify, useAuth, useData } from "@/components ";
import { Stack } from "@mui/material";
import { useState } from "react";
import { AddressFormik } from "./_component/AddressFormik";
import { HeaderState } from "./_component/HeaderState";
import { OrderFormik } from "./_component/OrderFormik";
import { useFormik } from "formik";
import * as yup from "yup";
import { useOrderData } from "@/components /providers/OrderDataProvider";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  district: yup.string().required(),
  khoroo: yup.string().required(),
  apartment: yup.string().required(),
  additionalInformation: yup.string(),
  phoneNumber: yup.number().required(),
  // radioSelect: yup.string().required(),
});

export default function Order() {
  const { inCart } = useData();
  const { createOrder } = useOrderData();

  const router = useRouter();

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
    onSubmit: async (values) => {
      await createOrder({
        deliveryAddress: {
          district: values.district,
          khoroo: values.khoroo,
          apartment: values.apartment,
          additionalInformation: values.additionalInformation,
          phoneNumber: values.phoneNumber ?? 0,
        },
        foods: inCart,
      });
      toast(<Notify message="Захиалга амжилттай бүртгэгдлээ" />);
      router.push("/order/orderHistory");
    },
  });

  return (
    <CustomContainer maxWidth="lg">
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
        marginY={4}
      >
        {/* ADDRESS FORMIK */}
        <Stack alignItems={"center"}>
          <Stack gap={4} alignItems={"center"} width={500}>
            <Stack width={"100%"}>
              <HeaderState
                title="Хаягийн мэдээлэл оруулах"
                stepNumber={1}
                disabled={!formik.isValid || !formik.dirty}
              />
            </Stack>
            <AddressFormik
              districtName={"district"}
              districtValue={formik.values.district}
              districtError={
                (formik.touched.district && Boolean(formik.errors.district)) ||
                (formik.touched.district &&
                  formik.values.district == formik.initialValues.district)
              }
              khorooName={"khoroo"}
              khorooValue={formik.values.khoroo}
              khorooError={
                (formik.touched.khoroo && Boolean(formik.errors.khoroo)) ||
                (formik.touched.khoroo &&
                  formik.values.khoroo == formik.initialValues.khoroo)
              }
              apartmentName={"apartment"}
              apartmentValue={formik.values.apartment}
              apartmentError={
                (formik.touched.apartment &&
                  Boolean(formik.errors.apartment)) ||
                (formik.touched.apartment &&
                  formik.values.apartment == formik.initialValues.apartment)
              }
              additionalInformationName={"additionalInformation"}
              additionalInformationValue={formik.values.additionalInformation}
              additionalInformationError={
                formik.touched.additionalInformation &&
                Boolean(formik.errors.additionalInformation)
              }
              phoneNumberName={"phoneNumber"}
              phoneNumberValue={formik.values.phoneNumber}
              phoneNumberError={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
            />
          </Stack>
        </Stack>

        {/* ORDER FORMIK */}
        <Stack alignItems={"center"}>
          <Stack gap={4} alignItems={"center"} width={500}>
            <Stack width={"100%"}>
              <HeaderState
                title="Захиалга баталгаажуулах"
                stepNumber={2}
                disabled={true}
              />
            </Stack>
            <OrderFormik
              submitFormik={formik.handleSubmit}
              disable={!formik.isValid || !formik.dirty}
            />
          </Stack>
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
