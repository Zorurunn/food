import { State } from "@/components ";
import { Stack, Typography } from "@mui/material";

type headerStateType = {
  title: string;
  stepNumber: number;
  disabled?: boolean;
};
export const HeaderState = (props: headerStateType) => {
  const { title, stepNumber, disabled = false } = props;
  return (
    <Stack direction={"row"} alignItems={"center"} gap={2}>
      <State disabled={disabled} />
      <Stack>
        <Typography color={"text.secondary"} fontSize={14}>
          Step {stepNumber}
        </Typography>
        <Typography fontSize={20}>{title}</Typography>
        <Typography fontSize={16} color={disabled ? "#0468C8" : "primary.main"}>
          {disabled ? "Proccessing" : "confirmed"}
        </Typography>
      </Stack>
    </Stack>
  );
};
