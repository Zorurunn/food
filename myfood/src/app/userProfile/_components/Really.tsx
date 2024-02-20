import { useAuth } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export const Really = () => {
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
          width={200}
          textAlign={"center"}
          fontWeight={600}
          fontSize={"20px"}
        >
          Та системээс гарахдаа итгэлтэй байна уу?
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
          onClick={signOut}
        >
          Тийм
        </Stack>
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "primary.main", color: "#fff" }}
          fontWeight={600}
          fontSize={"20px"}
          onClick={() => {
            console.log("clicked");

            // setReally(false);
          }}
        >
          Үгүй
        </Stack>
      </Stack>
    </Stack>
  );
};
