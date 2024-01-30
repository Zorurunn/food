import { Stack } from "@mui/material";
import { ReactNode } from "react";

type AbsoluteContainerProps = {
  children: ReactNode;
  width: string;
};
export const AbsContRight = (props: AbsoluteContainerProps) => {
  const { width, children } = props;
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
        top={0}
        right={0}
        bgcolor={"#fff"}
        padding={3}
        width={width}
        height={"100vh"}
      >
        {children}
      </Stack>{" "}
    </Stack>
  );
};
