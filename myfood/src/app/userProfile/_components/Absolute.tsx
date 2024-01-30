import { CustomInput, HeadText, Login } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

type LoginProps = {
  position?: string;
};
export const Absolute = (props: LoginProps) => {
  const { position } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handlePassword = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <Stack
      width="100%"
      height="100vh"
      bgcolor="#00000070"
      position="absolute"
      top={0}
      left={0}
      zIndex={2}
    >
      <Stack
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
        borderRadius={5}
        bgcolor={"#fff"}
        padding={3}
      >
        <Login />
      </Stack>
    </Stack>
  );
};
