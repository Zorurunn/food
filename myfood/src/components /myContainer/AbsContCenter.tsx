import { Stack } from "@mui/material";
import { ReactNode } from "react";

type AbsoluteContainerProps = {
  children: ReactNode;
};
export const AbsContCenter = (props: AbsoluteContainerProps) => {
  return (
    <Stack
      width="100%"
      height="100vh"
      bgcolor="#00000070"
      position="absolute"
      top={0}
      left={0}
      zIndex={2}
    >
      <Stack
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
        borderRadius={5}
        bgcolor={"#fff"}
        padding={3}
      >
        {props.children}
      </Stack>
    </Stack>
  );
};
