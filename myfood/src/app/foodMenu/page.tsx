"use client";
import { Card, CustomContainer, Login, useData } from "@/components ";
import { Backdrop, Button, Grid, Stack, Typography } from "@mui/material";
import { SideBar } from "./_component/SideBar";
import { useEffect, useState } from "react";
import { api, categoryType, foodType } from "@/common";
import { RightTop } from "./_component/RightTop";
import { EditFood } from "./_component/EditFood";
import { CreateFood } from "./_component/CreateFood";
import { CreateCategory } from "./_component/CreateCategory";
import { useConfirm } from "@/components /providers/ConfirmationProvider";
import { useBackDrop } from "@/components /providers/BackDropProvider";

export default function FoodMenu() {
  const { foods, categories, deleteCategory, searchValue } = useData();
  const { confirm } = useConfirm();

  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [thisFood, setThisFood] = useState<foodType>();
  const [openEditFood, setOpenEditFood] = useState(false);
  const { setOpenCreateFood } = useBackDrop();
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <CustomContainer maxWidth="lg">
      <Stack
        direction={"row"}
        sx={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}
        width={"100%"}
        gap={2}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Stack sx={{ backgroundColor: "primary.dark" }}>
          <Stack
            gap={4}
            alignItems={"space-between"}
            marginY={2}
            paddingLeft={3}
          >
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography fontSize={22} fontWeight={700}>
                {selectedCategory && selectedCategory.name}
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
                onClick={() => {
                  setOpenCreateFood(true);
                }}
              >
                Add new food
              </Stack>
            </Stack>
            <Grid container spacing={4}>
              {selectedCategory &&
                foods &&
                foods
                  .filter((item) => {
                    return (
                      item.name
                        .toLowerCase()
                        .includes(searchValue.toLowerCase()) ||
                      item.ingredients
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                    );
                  })
                  ?.filter((item) => {
                    return item.category === selectedCategory._id;
                  })
                  .map((item) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        key={item._id}
                        justifyContent={"center"}
                      >
                        <Card {...item} />
                      </Grid>
                    );
                  })}
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
