import { Stack, Typography } from "@mui/material";

export const RightTop = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      <Typography fontSize={22} fontWeight={700}>
        {selectedCategory}
      </Typography>
      <Stack
        width={130}
        fontSize={16}
        color={"#fff"}
        sx={{
          backgroundColor: "primary.main",
          borderRadius: 2,
          cursor: "pointer",
        }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        Add new food
      </Stack>
    </Stack>
  );
};
