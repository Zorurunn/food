import { CustomButton, CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";

export const AbsoluteLogin = () => {
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
      width={"100%"}
      height={"100vh"}
      bgcolor={"#00000070"}
      position={"absolute"}
      zIndex={2}
    >
      <Stack
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        zIndex={2}
        sx={{ transform: "translate(-50%, -50%)" }}
        border={"2px solid black"}
        borderRadius={5}
        bgcolor={"#fff"}
        padding={3}
      >
        <form>
          <Stack alignItems={"center"} justifyContent={"center"}>
            <HeadText text={"Нэвтрэх"} size="28px" wieght="700" />
            <Stack gap={9}>
              <Stack gap={2}>
                <CustomInput
                  label={"Имэйл"}
                  placeHolder="Имэйл хаягаа оруулна уу"
                  value={email}
                  handleChange={handleEmail}
                  size="medium"
                  type="text"
                  width={400}
                />
                <Stack alignItems="flex-end">
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
                  <Button>
                    <Typography
                      fontSize={14}
                      textTransform={"none"}
                      fontWeight={"400"}
                      color={"text.secondary"}
                    >
                      Нууц үг сэргээх
                    </Typography>
                  </Button>
                </Stack>
              </Stack>
              <Stack alignItems="center" gap={4}>
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  sx={{ py: "14.5px" }}
                  disabled={!email || !password}
                >
                  Нэвтрэх
                </Button>
                <Typography>Эсвэл</Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  disableElevation
                  sx={{
                    py: "14.5px",
                    color: "text.primary",
                  }}
                >
                  Бүртгүүлэх
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
};
