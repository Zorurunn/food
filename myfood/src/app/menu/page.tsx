"use client";
import { Stack } from "@mui/material";
import { Card, CustomContainer, FoodDetail, useData } from "@/components ";
import { CategoryButton } from "./_component/CategoryButton";
import { useEffect, useState } from "react";
import { api, categoryType, foodType } from "@/common";

// path: "/temporary/morning.jpg",

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const { categories, foods } = useData();

  useEffect(() => {
    if (!categories) return;
    setSelectedCategory(categories[0]);
  }, [categories]);
  return (
    <>
      <CustomContainer maxWidth="lg">
        <Stack gap={8}>
          <Stack
            direction={"row"}
            sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
            width={"100%"}
            gap={2}
          >
            {categories &&
              categories.map((item) => {
                return (
                  <CategoryButton
                    key={item._id}
                    {...item}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                  />
                );
              })}
          </Stack>
          <Stack
            direction={"row"}
            sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
            width={"100%"}
            gap={2}
          >
            {foods &&
              foods
                .filter((item) => {
                  return item.category === selectedCategory?._id;
                })
                .map((item) => {
                  return (
                    <Stack key={item._id}>
                      <Card {...item} />
                    </Stack>
                  );
                })}
          </Stack>
        </Stack>
      </CustomContainer>
    </>
  );
}
