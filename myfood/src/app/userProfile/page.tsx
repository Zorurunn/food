"use client";
import { Avatar, Button, Stack, TextField } from "@mui/material";
import { Profile } from "./_components/Profile";
import { FoodDetail } from "@/components /orderDetail/FoodDetail";
import ProfileImage from "@/components /userProfile/ProfileImage";
import { ChangeEvent, useState } from "react";
import { Edit } from "@mui/icons-material";
import { CustomContainer } from "@/components ";

export default function UserProfile() {
  return (
    <CustomContainer maxWidth="lg">
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Stack marginTop={"60px"} marginBottom={"60px"}>
          {/* <ProfileImage /> */}
          <Profile />
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
