import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const NotFound = () => {
  return (
    <Stack
      width={"100%"}
      flex={1}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      <Image
        width={200}
        height={200}
        src={"/temporary/empty.png"}
        alt="not found"
      />
      <Typography color={"text.secondary"}>
        Уучлаарай илэрц олдсонгүй...
      </Typography>
    </Stack>
  );
};
