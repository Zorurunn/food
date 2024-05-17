import { CustomInput, HeadText, useAuth } from "@/components ";
import { Backdrop, Button, CircularProgress, Stack } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export const Step1 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [open, setOpen] = useState(false);

  const { otpGenerate } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      await otpGenerate({ email: values.email });
      setOpen(false);
      setStep(2);
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
          <HeadText text={"Reset password"} size="28px" wieght="700" />
          <Stack gap={5}>
            <CustomInput
              name="email"
              label={"E-mail"}
              placeHolder="Insert email address"
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
