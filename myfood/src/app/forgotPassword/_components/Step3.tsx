"use client";
import { CustomInput, HeadText, Notify, useAuth } from "@/components ";
import {
  Backdrop,
  Button,
  CircularProgress,
  Stack,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
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

export const Step3 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { changePassword } = useAuth();
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const otp = localStorage.getItem("otp");
      const email = localStorage.getItem("email");
      if (!otp || !email) return;
      const newPassword = values.password;

      setOpen(true);

      const isSuccess = await changePassword({
        otp,
        email,
        newPassword,
      });

      setOpen(false);

      if (!isSuccess) {
        localStorage.removeItem("email");
        localStorage.removeItem("otp");
        setStep(1);
        return;
      }

      setStep(1);
      router.push("/signIn");
    },
  });

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Stack>
        <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
          <HeadText text={"Шинэ нууц үг зохиох "} size="28px" wieght="700" />

          <Stack gap={5}>
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
            <Button
              fullWidth
              variant="contained"
              disableElevation
              sx={{ py: "14.5px" }}
              disabled={!formik.isValid || !formik.dirty}
              onClick={() => {
                formik.handleSubmit();
              }}
            >
              Үргэлжлүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
