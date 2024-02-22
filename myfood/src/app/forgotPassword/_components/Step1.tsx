import { CustomInput, HeadText, Notify, useAuth } from "@/components ";
import {
  Backdrop,
  Button,
  CircularProgress,
  Modal,
  Stack,
} from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

export const Step1 = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  const [open, setOpen] = useState(false);
  // const { setStep } = props;
  // export const Step1 = (props: stepType) => {
  //   const { setStep } = props;
  const { otpGenerate } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpen(true);
      const { message, err } = await otpGenerate({ email: values.email });
      if (err) {
        toast(<Notify error={err} message={message} />);
        setOpen(false);
        return;
      }
      toast(<Notify error={err} message={message} />);
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
          <HeadText text={"Нууц үг сэргээх"} size="28px" wieght="700" />
          <Stack gap={5}>
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
