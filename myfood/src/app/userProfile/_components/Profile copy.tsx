import { HeadText, useAuth } from "@/components ";
import { Avatar, Stack, Typography } from "@mui/material";
import {
  Edit,
  Email,
  ExitToApp,
  History,
  Person,
  Phone,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { AbsContCenter } from "@/components ";
import { Really } from "./Really";
import { useState } from "react";
import { ExitButton } from "./ExitButton";
import { Exit } from "./Exit";
export const Profile = () => {
  const { user, signOut } = useAuth();
  // const [really, setReally] = useState(false);
  const router = useRouter();
  console.log("opo");

  return (
    <Stack marginY={2}>
      <Stack alignItems={"center"} justifyContent={"center"} gap={3}>
        <Stack position={"relative"}>
          <Avatar
            alt="Remy Sharp"
            src="/temporary/morning.jpg"
            sx={{ width: "120px", height: "120px" }}
          />
          <Stack position={"absolute"} bottom={"-5%"} left={"70%"}>
            <Stack
              width={35}
              height={35}
              border="1px solid"
              borderColor="text.secondary"
              borderRadius={10}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ backgroundColor: "#fff" }}
            >
              <Edit
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/userProfile/edit");
                }}
              />
            </Stack>
          </Stack>
        </Stack>
        <HeadText text={user?.name} size="28px" wieght="700" />
        <Stack gap={2} width={500}>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Person />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Таны нэр
              </Typography>
              <Typography fontSize={16}>{user?.name}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Edit
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/userProfile/edit");
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Phone />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Утасны дугаар
              </Typography>
              <Typography fontSize={16}>{user?.phoneNumber}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Edit
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/userProfile/edit");
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <Email />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              <Typography fontSize={12} color={"text.secondary"}>
                Имэйл хаяг
              </Typography>
              <Typography fontSize={16}>{user?.email}</Typography>
            </Stack>
            <Stack justifyContent={"center"} alignItems={"center"}>
              <Edit
                sx={{
                  fontSize: 24,
                  color: "primary.main",
                  cursor: "pointer",
                }}
                onClick={() => {
                  router.push("/userProfile/edit");
                }}
              />
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            width={"100%"}
            padding={2}
            gap={2}
            sx={{ backgroundColor: "primary.dark", cursor: "pointer" }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              width={48}
              height={48}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "100%",
                border: "1px solid",
                borderColor: "primary.dark",
              }}
            >
              <History />
            </Stack>
            <Stack flexGrow={1} justifyContent={"center"}>
              Захиалгын түүх
            </Stack>
          </Stack>
          {/* <ExitButton /> */}
          {/* <Really /> */}
          {/* <Exit /> */}
        </Stack>
      </Stack>
    </Stack>
  );
};
