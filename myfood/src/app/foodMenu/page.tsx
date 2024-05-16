"use client";
import { Card, CustomContainer, Login, useAuth, useData } from "@/components ";
import { Grid, Stack, Typography } from "@mui/material";
import { SideBar } from "./_component/SideBar";
import { useEffect, useState } from "react";
import { categoryType, foodType } from "@/common";
import { useConfirm } from "@/components /providers/ConfirmationProvider";
import { useBackDrop } from "@/components /providers/BackDropProvider";
import { LoaderPage } from "@/components /LoaderPage";
import { useRouter } from "next/navigation";

export default function FoodMenu() {
  const { foods, categories, deleteCategory, searchValue } = useData();
  const { confirm } = useConfirm();
  const { user, isAdmin } = useAuth();
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [thisFood, setThisFood] = useState<foodType>();
  const [openEditFood, setOpenEditFood] = useState(false);
  const { setOpenCreateFood } = useBackDrop();
  const [openCreateCategory, setOpenCreateCategory] = useState(false);

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
    }
  });
  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  if (!isAdmin) return <LoaderPage />;

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
        <Stack>
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
