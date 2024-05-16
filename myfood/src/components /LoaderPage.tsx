import { CircularProgress, Stack } from "@mui/material";

export const LoaderPage = () => {
  return (
    <Stack
      width={"100vw"}
      height={"100vh"}
      bgcolor={"common.white"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <CircularProgress />
    </Stack>
  );
};
