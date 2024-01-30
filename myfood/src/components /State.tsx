import { Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";

type StateProps = {
  state?: "ok" | null;
};
export const State = (props: StateProps) => {
  const { state } = props;
  return (
    <Stack
      borderRadius={10}
      sx={{ backgroundColor: state === "ok" ? "primary.main" : "#fff" }}
      border={`1px solid ${state === "ok" ? "primary.main" : "blue"}`}
      width={40}
      height={40}
      justifyContent={"center"}
      alignItems={"center"}
      color={`${state === "ok" ? "#fff" : "blue"}`}
    >
      {state === "ok" ? <CheckIcon /> : <CircleIcon />}
    </Stack>
  );
};
