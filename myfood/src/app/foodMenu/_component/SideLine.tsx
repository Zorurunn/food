import { MoreVert } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction } from "react";

export type selectCategoryTypes = {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
};
type titleType = {
  title: string;
};
// const categories = ["breakfast", "soup", "main course", "desserts"];
export const SideLine = (props: selectCategoryTypes & titleType) => {
  const { title, selectedCategory, setSelectedCategory } = props;
  const a = "A";
  return (
    <Stack
      direction={"row"}
      border={"1px solid"}
      borderColor={
        selectedCategory === title ? "primary.main" : "text.secondary"
      }
      borderRadius={2}
      padding={1}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        backgroundColor: selectedCategory === title ? "primary.main" : null,
        cursor: "pointer",
      }}
      onClick={() => {
        setSelectedCategory(title);
      }}
    >
      <Typography color={selectedCategory === title ? "#fff" : "text.primary"}>
        {title}
      </Typography>
      <MoreVert
        sx={{ color: selectedCategory === title ? "#fff" : "text.primary" }}
      />
    </Stack>
  );
};
