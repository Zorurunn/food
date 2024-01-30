import CheckIcon from "@mui/icons-material/Check";
import { Stack } from "@mui/material";
export const Notify = ({
  message,
  color,
}: {
  message: string;
  color: string;
}) => {
  return (
    <Stack
      direction={"row"}
      gap={1}
      color={color}
      borderRadius={2}
      padding={"10px 18px"}
      boxShadow={
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
      }
      width={300}
      justifyContent={"center"}
    >
      <CheckIcon />
      {message}
    </Stack>
  );
};
