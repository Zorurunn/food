import { CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleName = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const handleEmail = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const handleAddress = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setAddress(event.target.value);
  };
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
      <form>
        <Stack alignItems={"center"} justifyContent={"center"}>
          <HeadText text={"Бүртгүүлэх"} size="28px" wieght="700" />
          <Stack gap={9}>
            <Stack gap={2}>
              <CustomInput
                label={"Нэр"}
                placeHolder="Нэрээ оруулна уу"
                value={name}
                handleChange={handleName}
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                label={"Имэйл"}
                placeHolder="Имэйл хаягаа оруулна уу"
                value={email}
                handleChange={handleEmail}
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                label={"Хаяг"}
                placeHolder="Та хаягаа оруулна уу"
                value={address}
                handleChange={handleAddress}
                size="medium"
                type="text"
                width={400}
              />
              <CustomInput
                label={"Нууц үг"}
                placeHolder="Нууц үг"
                value={password}
                handleChange={handlePassword}
                type="password"
                adornment="end"
                size="medium"
                width={400}
              />
              <CustomInput
                label={"Нууц үг давтах"}
                placeHolder="Нууц үг"
                value={rePassword}
                handleChange={handleRePassword}
                type="password"
                adornment="end"
                size="medium"
                width={400}
              />
              <Stack direction={"row"} alignItems={"center"} gap={1}>
                <CloudQueueIcon sx={{ color: "text.secondary", padding: 0 }} />
                <Typography
                  fontSize={14}
                  textTransform={"none"}
                  fontWeight={"400"}
                  color={"text.secondary"}
                >
                  Үйлчилгээний нөхцөл зөвшөөрөх
                </Typography>
              </Stack>
            </Stack>
            <Stack alignItems="center" gap={4}>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{ py: "14.5px" }}
                disabled={
                  !name || !email || !address || !password || !rePassword
                }
              >
                Бүртгүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};
