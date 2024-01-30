import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const SearchedValue = ({ value }: { value: string }) => {
  return (
    <Stack>
      <Stack
        border={"1px solid transparent"}
        borderRadius={2}
        padding={"10px 18px"}
        boxShadow={
          "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
        }
        width={"fit-content"}
      >
        <Stack direction={"row"} gap={1}>
          <Typography fontSize={15} color={"primary.main"}>
            Хайлт
          </Typography>
          <Typography fontSize={15} color={"text.primary"}>
            /
          </Typography>
          <Typography fontSize={15} color={"text.primary"}>
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
