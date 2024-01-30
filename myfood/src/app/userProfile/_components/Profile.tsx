import { CustomInput, HeadText } from "@/components ";
import { Avatar, Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Edit } from "@mui/icons-material";
export const Profile = () => {
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
    <Stack>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <Avatar
            alt="Remy Sharp"
            src="/temporary/morning.jpg"
            sx={{ width: "120px", height: "120px" }}
          />
          <Stack
            width={40}
            height={40}
            border="1px solid"
            borderColor="text.secondary"
            borderRadius={10}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Edit
              sx={{
                fontSize: 24,
                color: "primary.main",
              }}
            />
          </Stack>
        </Stack>
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
    </Stack>
  );
};
