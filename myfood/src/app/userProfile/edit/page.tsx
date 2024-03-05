"use client";
import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
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
import { useConfirm } from "@/components /providers/ConfirmationProvider";
import { ChangeEvent, useState } from "react";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  phoneNumber: yup.string().required(),
});

export default function ProfileEdit() {
  const { user, userUpdate } = useAuth();
  const { confirm } = useConfirm();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState();
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = async () => {
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dfytgnxd7/upload?upload_preset=rhkkfdkh",
          {
            method: "POST",
            body: formData,
          }
        );
        // end yagad await hiij bga ve?
        // upload hiihees umnu
        // oruulj irsen image ee haruulah
        const data = await res.json();
        // setImageUrl(data.secure_url);
        console.log("daya", data.secure_url);
        return data.secure_url;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: user?.email,
      name: user?.name,
      phoneNumber: user?.phoneNumber,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const url = await handleImageUpload();
        // console.log(url);

        confirm("Та шинэчлэлт хийхдээ итгэлтэй байна уу ?", async () => {
          await userUpdate({
            name: values.name || "",
            email: values.email || "",
            phoneNumber: values.phoneNumber || "",
            avatar_url: url ?? "",
          });
        });
      } catch (e) {
        console.log("could not update user", e);
      }
    },
  });

  return (
    <Stack marginTop={"60px"} marginBottom={"60px"}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <Stack>
          {imageUrl ? (
            <Stack>
              <Stack position={"relative"}>
                <Avatar
                  alt="Remy Sharp"
                  src={imageUrl}
                  sx={{ width: "120px", height: "120px" }}
                />
              </Stack>
            </Stack>
          ) : (
            <TextField
              type="file"
              onChange={handleImageChange}
              variant="outlined"
              sx={{
                borderRadius: 2,
                width: "100%",
                height: 400,
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                backgroundColor: "primary.dark",
              }}
            />
          )}
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
                helperText={String(formik.errors.name)}
                error={formik.touched.name && Boolean(formik.errors.name)}
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
          <Button
            sx={{
              textTransform: "none",
              backgroundColor: "primary.main",
              color: "#fff",
            }}
            disabled={!formik.isValid || !selectedFile}
            onClick={() => {
              formik.handleSubmit();
            }}
          >
            Хадгалах
          </Button>
          {/* <Stack
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
          </Stack> */}
        </Stack>
      </Stack>
    </Stack>
  );
}
