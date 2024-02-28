"use client";

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
  confirm: (title: string, callback: () => Promise<void>) => void;
  // setIsDisplay: Dispatch<SetStateAction<boolean>>;
};

const ConfirmationContext = createContext<ConfirmationContextType>(
  {} as ConfirmationContextType
);

export const ConfirmationProvider = ({ children }: PropsWithChildren) => {
  const [callBackFunction, setCallBackFunction] = useState<any>({
    title: "",
    callback: () => Promise<void>,
  });

  const confirm = async (title: string, callback: () => void) => {
    setCallBackFunction({ title, callback });
  };

  return (
    <ConfirmationContext.Provider value={{ confirm }}>
      <Backdrop
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 2,
        }}
        open={Boolean(callBackFunction.title)}
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
                {callBackFunction.title}
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
                onClick={async () => {
                  if (callBackFunction.callback) {
                    await callBackFunction.callback();
                  }
                  setCallBackFunction({ title: "", callback: undefined });
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
                  setCallBackFunction({ title: "", callback: undefined });
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
