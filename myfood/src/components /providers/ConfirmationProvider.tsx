"use client";

import { foodType } from "@/app/menu/page";
import { api, categoryType, userUpdateProps } from "@/common";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { setOpenType, useData } from "..";
import { Backdrop, Stack, Typography } from "@mui/material";
import { Really } from "@/app/userProfile/_components/Really";

// const confirmType = {
//   title: String;
//   backUpFunction: Function;
// }

type ConfirmationContextType = {
  // confirm: (title: string, d: () => Promise<void>) => void;
  confirm: (title: string, d: void) => void;
  deleteCategory: (props: categoryType) => Promise<void>;
  test: () => void;
  // setIsDisplay: Dispatch<SetStateAction<boolean>>;
};

const ConfirmationContext = createContext<ConfirmationContextType>(
  {} as ConfirmationContextType
);

export const ConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [title, setTitle] = useState("");
  const [backUpFunction, setBackUpFunction] = useState<any>({
    callback: null,
  });

  const { setRefresh } = useData();

  // DELETE CATEGORY
  const deleteCategory = async (props: categoryType) => {
    const { name, _id } = props;

    const token = localStorage.getItem("token");

    try {
      const res = await api.post(
        "/deleteCategory",
        {
          name,
          _id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log("delete category  res", res);

      setRefresh((prev) => 1 - prev);
    } catch (error) {
      console.log(error);
    }
  };

  // TEST
  const test = () => {
    console.log("this is test function");
  };

  const confirm = async (title: string, callback: void) => {
    setTitle(title);
    // setBackUpFunction({ callback });
  };

  return (
    <ConfirmationContext.Provider value={{ confirm, deleteCategory, test }}>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={Boolean(title)}
      >
        {/* Confirmation */}
        <Stack
          width={80}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        >
          <Stack
            width={400}
            height={200}
            borderRadius={5}
            sx={{ backgroundColor: "#fff" }}
            gap={2}
            overflow={"hidden"}
            display={"flex"}
          >
            <Stack
              flexGrow={1}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography
                width={220}
                textAlign={"center"}
                fontWeight={600}
                fontSize={"20px"}
                color={"text.primary"}
              >
                {title}
              </Typography>
            </Stack>
            <Stack width={"100%"} direction={"row"}>
              <Stack
                flexGrow={1}
                justifyContent={"center"}
                alignItems={"center"}
                padding={2}
                sx={{ backgroundColor: "primary.light", cursor: "pointer" }}
                fontWeight={600}
                fontSize={"20px"}
                onClick={() => {
                  if (backUpFunction.callback) {
                    backUpFunction.callback();
                  }
                }}
              >
                Тийм
              </Stack>
              <Stack
                flexGrow={1}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                  backgroundColor: "primary.main",
                  color: "#fff",
                  cursor: "pointer",
                }}
                fontWeight={600}
                fontSize={"20px"}
                onClick={() => {
                  setTitle("");
                  setBackUpFunction(undefined);
                }}
              >
                Үгүй
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Backdrop>
      ;{children}
    </ConfirmationContext.Provider>
  );
};

export const useConfirm = () => useContext(ConfirmationContext);
