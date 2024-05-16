"use client";
import { Stack } from "@mui/material";
import { Profile } from "./_components/Profile";

import { CustomContainer } from "@/components ";

export default function UserProfile() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Stack marginTop={"60px"} marginBottom={"60px"}>
          <Profile />
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
