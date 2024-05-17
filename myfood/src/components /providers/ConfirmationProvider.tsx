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
import { Backdrop, Button, Stack, Typography } from "@mui/material";
import { Really } from "@/app/userProfile/_components/Really";
import { useData } from "..";

// const confirmType = {
//   title: String;
//   backUpFunction: Function;
// }

type ConfirmationContextType = {
  confirm: (title: string, callback: () => void) => void;
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
  const { setRefresh } = useData();

  const confirm = async (title: string, callback: () => void) => {
    setCallBackFunction({ title, callback });
    setRefresh((prev) => 1 - prev);
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
              <Button
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "primary.main",
                  width: "100%",
                  borderRadius: 0,
                  borderRight: "2px solid #fff",
                  ":hover": {
                    color: "#000",
                  },
                }}
                onClick={async () => {
                  if (callBackFunction.callback) {
                    await callBackFunction.callback();
                  }
                  setCallBackFunction({ title: "", callback: undefined });
                }}
              >
                Yes
              </Button>
              <Button
                sx={{
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "#fff",
                  bgcolor: "primary.main",
                  width: "100%",
                  borderRadius: 0,
                  ":hover": {
                    color: "#000",
                  },
                }}
                onClick={() => {
                  setCallBackFunction({ title: "", callback: undefined });
                }}
              >
                No
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Backdrop>
      {children}
    </ConfirmationContext.Provider>
  );
};

export const useConfirm = () => useContext(ConfirmationContext);
