"use client";
import { Stack } from "@mui/material";
import { Card, CustomContainer, FoodDetail, useData } from "@/components ";
import { CategoryButton } from "./_component/CategoryButton";
import { useEffect, useState } from "react";
import { api, categoryType, foodType } from "@/common";
import { useSearchParams } from "next/navigation";

// path: "/temporary/morning.jpg",

export default function Menu() {
  const searchParams = useSearchParams();

  const paramName = searchParams.get("name");
  const paramId = searchParams.get("id");

  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const { categories, foods, searchValue } = useData();

  useEffect(() => {
    if (!categories) return;
    if (paramName) {
      setSelectedCategory({ name: paramName, _id: paramId ?? undefined });
    } else {
      setSelectedCategory(categories[0]);
    }
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
            <CategoryButton
              name="Discounted"
              _id="discount"
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
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
                  return (
                    item.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase()) ||
                    item.ingredients
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  );
                })
                .filter((item) => {
                  if (selectedCategory?._id === "discount") {
                    return item.discount !== 0;
                  } else {
                    return item.category === selectedCategory?._id;
                  }
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
