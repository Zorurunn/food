import { Button, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Stars";
import { Card, CustomContainer, useData } from "@/components ";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { categoryType } from "@/common";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type isDiscountType = {
  isDiscount?: boolean;
};

export const Category = (props: categoryType & isDiscountType) => {
  const { foods, searchValue } = useData();
  const { name, _id, isDiscount = false } = props;
  const router = useRouter();

  return (
    <Stack gap={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"} alignItems={"center"} gap={1}>
          <StarIcon sx={{ color: "primary.main" }} />
          <Typography fontWeight={800} fontSize={18}>
            {name}
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            sx={{ textTransform: "none" }}
            onClick={() => {
              router.push(`/menu?name=${name}&id=${_id}`);
            }}
          >
            Бүгдийг харах
          </Button>
          <ChevronRightIcon sx={{ color: "primary.main" }} />
        </Stack>
      </Stack>
      <Stack
        sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
        width={"100%"}
        gap={2}
      >
        {isDiscount
          ? foods &&
            foods
              .filter((item) => {
                return (
                  item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.ingredients
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              })
              .filter((item) => {
                return item.discount !== 0;
              })
              .filter((_item, index) => index < 4)
              .map((item) => <Card key={item._id} {...item} />)
          : foods &&
            foods
              .filter((item) => {
                return (
                  item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                  item.ingredients
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              })
              .filter((item) => {
                return item.category === _id;
              })
              .filter((_item, index) => index < 4)
              .map((item) => <Card key={item._id} {...item} />)}
      </Stack>
    </Stack>
  );
};
