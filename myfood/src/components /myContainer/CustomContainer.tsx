import { Breakpoint, Container, Typography } from "@mui/material";
import { ReactNode } from "react";

type CustomContainerProps = {
  maxWidth: Breakpoint;
  children: ReactNode;
  height?: string;
};
export const CustomContainer = (props: CustomContainerProps) => {
  const { maxWidth, children, height } = props;
  return (
    <Container maxWidth={`${maxWidth}`} sx={{ height: height }}>
      {children}
    </Container>
  );
};
