import { CustomInput, HeadText, useData } from "@/components ";
import { Backdrop, Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";
import { Close } from "@mui/icons-material";
import { useConfirm } from "@/components /providers/ConfirmationProvider";

const validationSchema = yup.object({
  name: yup.string().required(),
});

export const CreateCategory = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { confirm } = useConfirm();
  const { createCategory } = useData();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      try {
        confirm("Та хадгалахдаа итгэлтэй байна уу ?", async () => {
          await createCategory({ name: values.name });
          setOpen(false);
          formik.resetForm();
        });
      } catch (e) {
        alert(e);
      }
    },
  });

  return (
    <>
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
