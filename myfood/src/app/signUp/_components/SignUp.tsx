import { CustomInput, HeadText, useAuth, useData } from "@/components ";
import { Button, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  phoneNumber: yup.string().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(2, "Password is too short - should be 2 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Does not match with password!")
    .required("No password provided.")
    .min(2, "Password is too short - should be 2 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const SignUp = () => {
  const router = useRouter();
  const { signUp } = useAuth();
  const { setIsDisplay } = useData();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });

  const handleSubmit = () => {
    signUp({
      name: formik.values.name,
      email: formik.values.email,
      address: formik.values.address,
      password: formik.values.password,
      phoneNumber: formik.values.phoneNumber,
    });
  };

  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <HeadText text={"Бүртгүүлэх"} size="28px" wieght="700" />
        <Stack gap={9}>
          <Stack gap={2}>
            <CustomInput
              name="name"
              label={"Нэр"}
              placeHolder="Нэрээ оруулна уу"
              value={formik.values.name}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              isError={formik.errors.name}
              isTouched={formik.touched.name}
              helperText={String(formik.errors.name)}
              size="medium"
              type="text"
              width={400}
            />
            <CustomInput
              name="email"
              label={"Имэйл"}
              placeHolder="Имэйл хаягаа оруулна уу"
              value={formik.values.email}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              isError={formik.errors.email}
              isTouched={formik.touched.email}
              helperText={String(formik.errors.email)}
              size="medium"
              type="text"
              width={400}
            />
            <CustomInput
              name="address"
              label={"Хаяг"}
              placeHolder="Та хаягаа оруулна уу"
              value={formik.values.address}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              isError={formik.errors.address}
              isTouched={formik.touched.address}
              helperText={String(formik.errors.address)}
              size="medium"
              type="text"
              width={400}
            />
            <CustomInput
              name="phoneNumber"
              label={"Утасны дугаар"}
              placeHolder="Та утасны дугаар аа оруулна уу"
              value={formik.values.phoneNumber}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              isError={formik.errors.phoneNumber}
              isTouched={formik.touched.phoneNumber}
              helperText={String(formik.errors.phoneNumber)}
              size="medium"
              type="text"
              width={400}
            />
            <CustomInput
              name="password"
              label={"Нууц үг"}
              placeHolder="Нууц үг"
              value={formik.values.password}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              isError={formik.errors.password}
              isTouched={formik.touched.password}
              helperText={String(formik.errors.password)}
              type="password"
              adornment="end"
              size="medium"
              width={400}
            />
            <CustomInput
              name="repeatPassword"
              label={"Нууц үг давтах"}
              placeHolder="Нууц үг давтах"
              value={formik.values.repeatPassword}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.repeatPassword &&
                Boolean(formik.errors.repeatPassword)
              }
              isError={formik.errors.repeatPassword}
              isTouched={formik.touched.repeatPassword}
              helperText={String(formik.errors.repeatPassword)}
              type="password"
              adornment="end"
              size="medium"
              width={400}
            />

            <Stack direction={"row"} alignItems={"center"} gap={1}>
              <CloudQueueIcon sx={{ color: "text.secondary", padding: 0 }} />
              <Typography
                fontSize={14}
                textTransform={"none"}
                fontWeight={"400"}
                color={"text.secondary"}
              >
                Үйлчилгээний нөхцөл зөвшөөрөх
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems="center" gap={4}>
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              disableElevation
              sx={{ py: "14.5px", color: "#fff" }}
              disabled={!formik.isValid || !formik.dirty}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
