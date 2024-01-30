import { Typography } from "@mui/material";

export const HeadText = ({
  text,
  size,
  wieght,
}: {
  text: string;
  size: string;
  wieght: string;
}) => {
  return (
    <Typography sx={{ fontSize: size, fontWeight: wieght }}>{text}</Typography>
  );
};
