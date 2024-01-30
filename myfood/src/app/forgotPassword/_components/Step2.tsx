"use client";
import { CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export const Step2 = () => {
  const [storedEmail, setStoredEmail] = useState<string | null>(
    "no email found try again"
  );
  useEffect(() => {
    setStoredEmail(localStorage.getItem("email"));
    setStoredEmail("dewdew");
  }, []);

  const [resetCode, setResetCode] = useState("");
  const handleResetCode = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setResetCode(event.target.value);
  };
  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <HeadText text={"Нууц үг сэргээх"} size="28px" wieght="700" />

        <Stack gap={5}>
          <Typography>
            Таны
            {storedEmail}
            хаяг руу сэргээх код илгээх болно.
          </Typography>
          <CustomInput
            label={"Нууц үг сэргээх код"}
            placeHolder="*********"
            value={resetCode}
            handleChange={handleResetCode}
            size="medium"
            type="password"
            width={400}
            adornment="end"
          />
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{ py: "14.5px" }}
            disabled={!resetCode}
            type="submit"
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
