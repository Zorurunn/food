import { AbsContCenter } from "@/components ";
import { ExitToApp } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Really } from "./Really";
import { Dispatch, SetStateAction } from "react";

export const ExitButton = () => {
  const [really, setReally] = useState(false);

  return (
    <>
      {really && (
        <AbsContCenter>
          <Really
            title={"Та системээс гарахдаа итгэлтэй байна уу?"}
            setReally={setReally}
          />
        </AbsContCenter>
      )}
      <Stack
        direction={"row"}
        width={"100%"}
        padding={2}
        gap={2}
        sx={{ backgroundColor: "primary.dark", cursor: "pointer" }}
        onClick={() => {
          setReally(true);
        }}
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
          <ExitToApp />
        </Stack>
        <Stack flexGrow={1} justifyContent={"center"}>
          Гарах
        </Stack>
      </Stack>
    </>
  );
};
