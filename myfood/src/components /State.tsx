import { Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CircleIcon from "@mui/icons-material/Circle";

type StateProps = {
  disabled?: boolean;
};
export const State = (props: StateProps) => {
  const { disabled = true } = props;
  return (
    <Stack
      borderRadius={10}
      sx={{ backgroundColor: !disabled ? "primary.main" : "#fff" }}
      border={`1px solid ${!disabled ? "primary.main" : "blue"}`}
      width={40}
      height={40}
      justifyContent={"center"}
      alignItems={"center"}
      color={`${!disabled ? "#fff" : "blue"}`}
    >
      {!disabled ? <CheckIcon /> : <CircleIcon />}
    </Stack>
  );
};
