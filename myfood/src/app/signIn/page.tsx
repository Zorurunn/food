"use client";
import { Login } from "@/components ";
import { Stack } from "@mui/material";

export default function SignIn() {
  return (
    <Stack
      marginTop={"60px"}
      marginBottom={"60px"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Login />
    </Stack>
  );
}
