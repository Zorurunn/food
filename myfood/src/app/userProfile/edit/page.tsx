"use client";
import { Avatar, Stack, Typography } from "@mui/material";
import { FoodDetail } from "@/components /orderDetail/FoodDetail";
import {
  Edit,
  Email,
  ExitToApp,
  History,
  Person,
  Phone,
} from "@mui/icons-material";
import {
  AbsContCenter,
  CustomInput,
  HeadText,
  Notify,
  useAuth,
} from "@/components ";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { Really } from "../_components/Really";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  phoneNumber: yup.string().required(),
});

export default function ProfileEdit() {
  const { user, userUpdate } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
      phoneNumber: user?.phoneNumber,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        userUpdate({
          name: values.name || "",
          email: values.email || "",
          phoneNumber: values.phoneNumber || "",
        });
      } catch (e) {
        console.log("could not update user", e);
      }
    },
  });

  return (
    <Stack marginTop={"60px"} marginBottom={"60px"}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <Stack position={"relative"}>
          <Avatar
            alt="Remy Sharp"
            src="/temporary/morning.jpg"
            sx={{ width: "120px", height: "120px" }}
          />
          <Stack position={"absolute"} bottom={"-5%"} left={"70%"}>
            <Stack
              width={35}
              height={35}
              border="1px solid"
              borderColor="text.secondary"
              borderRadius={10}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ backgroundColor: "#fff" }}
            >
              <Edit
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <HeadText text={user?.name} size="28px" wieght="700" />
        <Stack gap={2} width={500}>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Person />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Таны нэр
              </Typography>

              <CustomInput
                name="name"
                placeHolder="Нэрээ оруулна уу"
                value={formik.values.name ?? user?.name ?? ""}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={}
                size="medium"
                type="text"
                width={400}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Phone />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Утасны дугаар
              </Typography>
              <CustomInput
                name="phoneNumber"
                placeHolder="Утасны дугаар аа оруулна уу"
                value={formik.values.phoneNumber ?? user?.phoneNumber ?? ""}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                size="medium"
                type="text"
                width={400}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Email />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Имэйл хаяг
              </Typography>
              <CustomInput
                name="email"
                placeHolder="Email оруулна уу"
                value={formik.values.email ?? user?.email ?? ""}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                size="medium"
                type="text"
                width={400}
              />
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.main", cursor: "pointer" }}
            justifyContent={"center"}
            alignItems={"center"}
            color={"#fff"}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Хадгалах
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
