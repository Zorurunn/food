import {
  CustomInput,
  HeadText,
  setOpenType,
  useAuth,
  useData,
} from "@/components ";
import { Backdrop, Button, Stack, Typography } from "@mui/material";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
// import { useAuth } from "../providers/AuthProvider";
import { useRouter } from "next/navigation";
import { foodType } from "@/app/menu/page";
import { log } from "console";
import { Really } from "@/app/userProfile/_components/Really";
import { Close } from "@mui/icons-material";
import { create } from "domain";

const lines = [
  "Хоолны нэр",
  "Хоолны ангилал",
  "Хоолны орц",
  "Хоолны үнэ",
  "Хямдралтай эсэх",
  "Хоолны зураг",
];

const validationSchema = yup.object({
  name: yup.string().required(),
});

export const CreateCategory = (props: setOpenType) => {
  const { setOpen } = props;
  const [really, setReally] = useState(false);
  const { createCategory } = useData();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("formik values", values);
      createCategory({ name: values.name });
      formik.resetForm();
    },
  });

  return (
    <>
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        open={really}
      >
        <Stack
          width={80}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        >
          <Really
            title={"Хадгалахдаа итгэлтэй байна уу ?"}
            setReally={setReally}
            otherSet1={setOpen}
            submitFunction={formik.handleSubmit}
          />
        </Stack>
      </Backdrop>
      <Stack padding={4} sx={{ backgroundColor: "#fff" }} borderRadius={"4%"}>
        <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
          <Stack direction={"row"} width={"100%"}>
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <Close sx={{ color: "text.primary" }} />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"} alignItems={"center"}>
              <HeadText
                text={"Create category"}
                size="28px"
                wieght="700"
                color="black"
              />
            </Stack>
          </Stack>

          <Stack gap={9}>
            <Stack gap={3}>
              <CustomInput
                name="name"
                label={"Category name"}
                placeHolder="Enter new category name"
                value={formik.values.name}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                size="medium"
                type="text"
                width={400}
              />

              <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
                <Stack
                  color={"text.primary"}
                  fontSize={16}
                  fontWeight={700}
                  paddingX={2}
                  paddingY={1}
                  sx={{ cursor: "pointer" }}
                >
                  Clear
                </Stack>
                <Stack
                  color={"#fff"}
                  fontSize={16}
                  fontWeight={700}
                  sx={{ backgroundColor: "#393939", cursor: "pointer" }}
                  paddingX={2}
                  paddingY={1}
                  borderRadius={2}
                  onClick={() => {
                    setReally(true);
                  }}
                >
                  Continue
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
