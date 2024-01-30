"use client";
import { Stack } from "@mui/material";
import { Profile } from "./_components/Profile";
import { FoodDetail } from "@/components /orderDetail/FoodDetail";

export default function SignIn() {
  return (
    <Stack marginTop={"60px"} marginBottom={"60px"}>
      {/* <Profile /> */}
      <FoodDetail />
    </Stack>
  );
}
