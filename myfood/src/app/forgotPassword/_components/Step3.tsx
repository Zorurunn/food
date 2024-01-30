"use client";
import { CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export const Step3 = () => {
  // todo: after confirm display toast success message
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handlePassword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setPassword(event.target.value);
  };
  const handleRePassword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setRePassword(event.target.value);
  };
  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <HeadText text={"Шинэ нууц үг зохиох "} size="28px" wieght="700" />

        <Stack gap={5}>
          <CustomInput
            label={"Нууц үг"}
            placeHolder="******"
            value={password}
            handleChange={handlePassword}
            type="password"
            adornment="end"
            size="medium"
            width={400}
          />
          <CustomInput
            label={"Нууц үг давтах"}
            placeHolder="******"
            value={rePassword}
            handleChange={handleRePassword}
            type="password"
            adornment="end"
            size="medium"
            width={400}
          />
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{ py: "14.5px" }}
            disabled={!password || !rePassword}
            type="submit"
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
