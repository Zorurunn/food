"use client";
import { Card, CustomContainer, Login, useData } from "@/components ";
import { Backdrop, Button, Grid, Stack, Typography } from "@mui/material";
import { SideBar } from "./_component/SideBar";
import { useEffect, useState } from "react";
import { foodType } from "../menu/page";
import { api, categoryType } from "@/common";
import { RightTop } from "./_component/RightTop";
import { EditFood } from "./_component/EditFood";
import { CreateFood } from "./_component/CreateFood";
import { CreateCategory } from "./_component/CreateCategory";
import { useConfirm } from "@/components /providers/ConfirmationProvider";

export default function FoodMenu() {
  const { foods, categories, deleteCategory, a } = useData();
  const { confirm } = useConfirm();

  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  // const [foods, setFoods] = useState<foodType[] | null>(null);
  const [thisFood, setThisFood] = useState<foodType>();
  const [openEditFood, setOpenEditFood] = useState(false);
  const [openCreateFood, setOpenCreateFood] = useState(false);
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  // console.log("selected", selectedCategory);

  // const getAllFoods = async () => {
  //   try {
  //     const res = await api.get("/getAllFoods");
  //     setFoods(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  console.log("this food", thisFood);

  // useEffect(() => {
  //   getAllFoods();
  // }, []);

  useEffect(() => {
    if (categories) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  return (
    <CustomContainer maxWidth="lg">
      <Stack
        onClick={() => {
          deleteCategory({ name: "Main course" });
        }}
      >
        DEEEE
      </Stack>
      {/* CREATE CATEGORY MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openCreateCategory}
      >
        <CreateCategory setOpen={setOpenCreateCategory} />
      </Backdrop>
      {/* ADD FOOD MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openCreateFood}
      >
        <CreateFood setOpen={setOpenCreateFood} />
      </Backdrop>

      {/* DELETE CATEGORY MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openEditFood}
      >
        {thisFood && (
          <EditFood
            {...thisFood}
            setOpen={setOpenEditFood}
            setThisFood={setThisFood}
          />
        )}
      </Backdrop>
      {/* CREATE FOOD MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openEditFood}
      >
        {thisFood && (
          <EditFood
            {...thisFood}
            setOpen={setOpenEditFood}
            setThisFood={setThisFood}
          />
        )}
      </Backdrop>

      <Stack
        direction={"row"}
        sx={{ display: "grid", gridTemplateColumns: "1fr 3fr" }}
        width={"100%"}
        gap={2}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setOpen={setOpenCreateCategory}
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
                  ?.filter((item) => {
                    return item.category === selectedCategory._id;
                  })
                  .map((item) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        key={item._id}
                        onClick={() => {
                          console.log("clicked item", item);

                          setThisFood(item);
                          setOpenEditFood(true);
                        }}
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
