import { Close } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
import { Stack, Typography } from "@mui/material";
export const Notify = ({
  message,
  error = false,
}: {
  message: string;
  error?: boolean;
}) => {
  return (
    <Stack
      direction={"row"}
      gap={1}
      borderRadius={2}
      padding={"10px 18px"}
      boxShadow={
        "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
      }
      width={300}
      justifyContent={"center"}
    >
      {error ? <Close sx={{ color: "red" }} /> : <CheckIcon />}
      <Typography color={error ? "primary.main" : "primary.main"}>
        {message}
      </Typography>
    </Stack>
  );
};
