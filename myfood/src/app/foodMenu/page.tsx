"use client";
import { Card, CustomContainer, Login } from "@/components ";
import { Grid, Stack } from "@mui/material";
import { SideBar } from "./_component/SideBar";
import { useEffect, useState } from "react";
import { foodType } from "../menu/page";
import { api } from "@/common";

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [foods, setFoods] = useState<foodType[] | null>(null);

  console.log("selected", selectedCategory);

  const getAllFoods = async () => {
    try {
      const res = await api.get("/getAllFoods");
      setFoods(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllFoods();
  }, []);

  return (
    <CustomContainer maxWidth="lg">
      <Stack marginTop={"60px"} marginBottom={"60px"}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <SideBar
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={4}>
              {foods
                ?.filter((item) => {
                  return item.category === selectedCategory;
                })
                .map((item) => {
                  // const { imgPath, name, price, discount } = item;
                  return (
                    <Grid
                      item
                      xs={4}
                      key={item._id}
                      onClick={() => {
                        // setThisFood(item);
                        // setOpen(true);
                      }}
                    >
                      <Card {...item} />
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </CustomContainer>
  );
}
