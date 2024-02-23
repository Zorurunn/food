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
  category: yup.string().required(),
  ingredients: yup.string().required(),
  price: yup.number().required(),
  discount: yup.number().required(),
  imgPath: yup.string().required(),
});
type setThisFoodType = {
  setThisFood: Dispatch<SetStateAction<foodType | undefined>>;
};

export const CreateFood = (props: setOpenType) => {
  const { setOpen } = props;
  const [really, setReally] = useState(false);
  const router = useRouter();
  const { createFood } = useData();

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      ingredients: "",
      price: 0,
      discount: 0,
      imgPath: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("formik values", values);
      createFood({
        imgPath: values.imgPath,
        name: values.name,
        price: values.price,
        discount: values.discount,
        ingredients: values.ingredients,
        category: values.category,
      });
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
                text={"Create food"}
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
                label={"Хоолны нэр"}
                placeHolder="Хоолны нэр оруулна уу"
                value={formik.values.name}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                name="category"
                label={"Хоолны ангилал"}
                placeHolder="Хоолны ангилал оруулна уу"
                value={formik.values.category}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.category && Boolean(formik.errors.category)
                }
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                name="ingredients"
                label={"Хоолны орц"}
                placeHolder="Хоолны орц оруулна уу"
                value={formik.values.ingredients}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.ingredients &&
                  Boolean(formik.errors.ingredients)
                }
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                name="price"
                label={"Хоолны үнэ"}
                placeHolder="Хоолны үнэ оруулна уу"
                value={formik.values.price}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                name="discount"
                label={"Хямдралтай эсэх"}
                placeHolder="Хямдралын хувь оруулна уу"
                value={formik.values.discount}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.discount && Boolean(formik.errors.discount)
                }
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                name="imgPath"
                label={"Хоолны зураг"}
                placeHolder="Хоолны зураг оруулна уу"
                value={formik.values.imgPath}
                handleChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.imgPath && Boolean(formik.errors.imgPath)}
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
