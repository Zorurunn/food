"use client";
import { CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  password: yup.string().required(),
});
export const Step2 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [storedEmail, setStoredEmail] = useState<string | null>("****");
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      localStorage.setItem("otp", values.password);
      // otpGenerate({ email: values.email });
      console.log(values);
      setStep(3);
      // router.push(`/forgotPassword?step=3&${values.password}`);
    },
  });

  useEffect(() => {
    const email = localStorage.getItem("email");
    setStoredEmail(email);
  }, []);

  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <HeadText text={"Нууц үг сэргээх"} size="28px" wieght="700" />

        <Stack gap={5} width={400}>
          <Typography>
            Таны &nbsp;
            <Typography component="span" color="primary.main">
              {storedEmail}
            </Typography>
            &nbsp;хаяг руу илгээсэн нууц кодыг оруулна уу.
          </Typography>

          <CustomInput
            name="password"
            label={"Нууц үг сэргээх код"}
            placeHolder="Нууц үг сэргээх код оруулна уу"
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
  );
};
