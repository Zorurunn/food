import { Typography } from "@mui/material";

export const HeadText = ({
  text,
  size,
  wieght,
  color,
}: {
  text: string | undefined;
  size: string;
  wieght: string;
  color?: string;
}) => {
  return (
    <Typography sx={{ fontSize: size, fontWeight: wieght, color: color }}>
      {text}
    </Typography>
  );
};
