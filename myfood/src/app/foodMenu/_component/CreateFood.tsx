"use client";

import { CustomInput, HeadText, useAuth, useData } from "@/components ";
import {
  Backdrop,
  Stack,
  MenuItem,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
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
import { Really } from "@/app/userProfile/_components/Really";
import { Close } from "@mui/icons-material";
import { useConfirm } from "@/components /providers/ConfirmationProvider";
import Image from "next/image";

const validationSchema = yup.object({
  name: yup.string().required(),
  category: yup.string().required(),
  ingredients: yup.string().required(),
  price: yup.number().required(),
  discount: yup.number().required(),
});

export const CreateFood = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { confirm } = useConfirm();
  const { createFood, categories } = useData();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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
        return data.secure_url;
      } catch (e) {
        console.log(e);
      }
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      ingredients: "",
      price: 0,
      discount: 0,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      // console.log();

      try {
        setIsLoading(true);
        const url = await handleImageUpload();
        setIsLoading(false);
        confirm("Та хадгалахдаа итгэлтэй байна уу ?", async () => {
          await createFood({
            imgPath: url,
            name: values.name,
            price: values.price,
            discount: values.discount,
            ingredients: values.ingredients,
            category: values.category,
          });
          setOpen(false);
          formik.resetForm();
          setSelectedFile(null);
        });
      } catch (e) {
        alert(e);
      }
    },
  });

  useEffect(() => {
    if (categories) {
      formik.setFieldValue("category", categories[0]._id);
    }
  }, [categories]);
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
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

              {categories && (
                <CustomInput
                  name="category"
                  label={"Хоолны ангилал"}
                  placeHolder="Хоолны ангилал оруулна уу"
                  value={formik.values.category ?? ""}
                  handleChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  size="medium"
                  type="text"
                  width={400}
                  select={true}
                >
                  {categories.map((item) => {
                    return (
                      <MenuItem key={item._id} value={item._id}>
                        {item.name}
                      </MenuItem>
                    );
                  })}
                </CustomInput>
              )}
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
              {/* <CustomInput
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
              /> */}
              <Stack>
                <Typography color={"text.primary"}>Хоолны зураг</Typography>

                <Stack direction={"row"} gap={2} height={200}>
                  <Stack flexGrow={1} flexBasis={1}>
                    <TextField
                      label={""}
                      type="file"
                      onChange={handleImageChange}
                      variant="outlined"
                      sx={{
                        borderRadius: 2,
                        width: "100%",
                        height: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: 2,
                        backgroundColor: "primary.dark",
                      }}
                    />
                  </Stack>
                </Stack>
              </Stack>
              <Stack direction={"row"} justifyContent={"flex-end"} gap={2}>
                <Stack
                  color={"text.primary"}
                  fontSize={16}
                  fontWeight={700}
                  paddingX={2}
                  paddingY={1}
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setOpen(false);
                  }}
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
                    formik.handleSubmit();
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
