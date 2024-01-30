"use client";
import { Stack } from "@mui/material";
import { ForgotPassword } from "./_components/ForgotPassword";

export default function Home() {
  return (
    <Stack marginTop={"40px"} marginBottom={"40px"}>
      <ForgotPassword />
    </Stack>
  );
}
