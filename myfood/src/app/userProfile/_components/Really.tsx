import { categoryType, foodType } from "@/common";
import { useAuth } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
export const Really = ({
  setReally,
  title,
  otherSet1,
  otherSet2,
  submitFunction,
}: {
  title: string;
  setReally: Dispatch<SetStateAction<boolean>>;
  otherSet1?: Dispatch<SetStateAction<boolean>>;
  otherSet2?: Dispatch<SetStateAction<foodType | undefined>>;
  submitFunction?: () => void;
}) => {
  const { signOut } = useAuth();

  return (
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
            if (title === "Та системээс гарахдаа итгэлтэй байна уу?") {
              signOut();
            } else {
              if (otherSet1) {
                otherSet1(false);
              }
              if (otherSet2) {
                otherSet2(undefined);
              }
              if (submitFunction) {
                submitFunction();
              }

              setReally(false);

              alert("food saved");
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
            setReally(false);
          }}
        >
          Үгүй
        </Stack>
      </Stack>
    </Stack>
  );
};
