import { CustomInput, HeadText, useAuth, useData } from "@/components ";
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
// import { foodType } from "@/app/menu/page";
import { Really } from "@/app/userProfile/_components/Really";
import { Close } from "@mui/icons-material";
import { create } from "domain";
import { categoryType } from "@/common";
import { useConfirm } from "@/components /providers/ConfirmationProvider";

const validationSchema = yup.object({
  name: yup.string().required(),
});

type setOpenType = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const EditCategory = (props: setOpenType & categoryType) => {
  const { name, _id, setOpen } = props;
  const { updateCategory } = useData();
  const { confirm } = useConfirm();
  const [really, setReally] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: name,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      confirm("Та шинэчлэлт хийхдээ итгэлтэй байна уу ?", async () => {
        await updateCategory({ name: values.name, _id });
        setOpen(false);
        formik.resetForm();
      });
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
                text={"Edit category name"}
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
                placeHolder="Enter category name"
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
                  onClick={() => {
                    formik.resetForm();
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
