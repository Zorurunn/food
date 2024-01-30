import { CustomInput, HeadText } from "@/components ";
import { Button, Stack } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const Step1 = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  return (
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <HeadText text={"Нууц үг сэргээх"} size="28px" wieght="700" />
        <Stack gap={5}>
          <CustomInput
            label={"Имэйл"}
            placeHolder="Имэйл хаягаа оруулна уу"
            value={email}
            handleChange={handleEmail}
            size="medium"
            type="text"
            width={400}
          />
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{ py: "14.5px" }}
            disabled={!email}
          >
            Үргэлжлүүлэх
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
