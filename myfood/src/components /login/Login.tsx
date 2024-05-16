import { CustomInput, HeadText, useData } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useAuth } from "../providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useBackDrop } from "../providers/BackDropProvider";

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
  const { setOpenLogin, setOpenLoading } = useBackDrop();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setOpenLoading(true);
      await signIn({
        email: formik.values.email,
        password: formik.values.password,
      });
      setOpenLogin(false);
      setOpenLoading(false);
    },
  });

  const handleSignUp = () => {
    setOpenLogin(false);
    router.push("/signUp");
  };

  return (
    <Stack
      padding={4}
      sx={{ backgroundColor: "#fff" }}
      borderRadius={"4%"}
      width={500}
    >
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <HeadText text={"Нэвтрэх"} size="28px" wieght="700" color="black" />
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
                  onClick={() => {
                    setOpenLogin(false);
                    router.push("/forgotPassword");
                  }}
                >
                  Нууц үг сэргээх
                </Typography>
              </Button>
            </Stack>
          </Stack>
          <Stack alignItems="center" gap={4}>
            <Button
              onClick={() => {
                formik.handleSubmit();
              }}
              fullWidth
              variant="contained"
              disableElevation
              sx={{ py: "14.5px", color: "#fff" }}
              disabled={!formik.isValid || !formik.dirty}
            >
              Нэвтрэх
            </Button>
            <Typography color={"text.primary"}>Эсвэл</Typography>
            <Stack direction={"row"} gap={1} width={"100%"}>
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
              <Button
                fullWidth
                variant="outlined"
                disableElevation
                sx={{
                  py: "14.5px",
                  color: "text.primary",
                }}
                onClick={async () => {
                  setOpenLoading(true);
                  await signIn({
                    email: "admin@gmail.com",
                    password: "aa",
                  });
                  setOpenLogin(false);
                  setOpenLoading(false);
                }}
              >
                Demo
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
