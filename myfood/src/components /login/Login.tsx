import { CustomInput, HeadText, useData } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(2, "Password is too short - should be 2 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

export const Login = () => {
  const router = useRouter();
  const { signIn } = useAuth();
  const { setIsDisplay } = useData();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSignIn = () => {
    setIsDisplay(false);
    signIn({ email: formik.values.email, password: formik.values.password });
  };
  const handleSignUp = () => {
    setIsDisplay(false);
    router.push("/signUp");
  };

  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <HeadText text={"Нэвтрэх"} size="28px" wieght="700" />
        <Stack gap={9}>
          <Stack gap={2}>
            <CustomInput
              name="email"
              label={"Имэйл"}
              placeHolder="Имэйл хаягаа оруулна уу"
              value={formik.values.email}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              size="medium"
              type="text"
              width={400}
            />
            <Stack alignItems="flex-end">
              <CustomInput
                name="password"
                label={"Нууц үг"}
                placeHolder="Нууц үг"
                value={formik.values.password}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                type="password"
                adornment="end"
                size="medium"
                width={400}
              />
              <Button>
                <Typography
                  fontSize={14}
                  textTransform={"none"}
                  fontWeight={"400"}
                  color={"text.secondary"}
                >
                  Нууц үг сэргээх
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack alignItems="center" gap={4}>
            <Button
              onClick={handleSignIn}
              fullWidth
              variant="contained"
              disableElevation
              sx={{ py: "14.5px" }}
              disabled={!formik.isValid || !formik.dirty}
            >
              Нэвтрэх
            </Button>
            <Typography>Эсвэл</Typography>
            <Button
              fullWidth
              variant="outlined"
              disableElevation
              sx={{
                py: "14.5px",
                color: "text.primary",
              }}
              onClick={handleSignUp}
            >
              Бүртгүүлэх
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
