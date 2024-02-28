"use client";
import { Filter } from "@/components /Filter";
import { TopSection } from "./_component/TopSection";
import {
  Backdrop,
  CircularProgress,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Card,
  CustomContainer,
  FoodDetail,
  setOpenType,
  useData,
} from "@/components ";
import { Category } from "./_component/Category";
import { SearchedValue } from "@/components /search/SearchedValue";
import { CategoryButton } from "./_component/CategoryButton";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api, categoryType, foodType } from "@/common";
import { log } from "console";
import { MyCart } from "@/components /orderDetail/MyCart";
import { Button } from "@mui/base";

const buttons = ["Main course", "Appetizers", "Beverage", "On Sale"];

const foodsa = [
  {
    imgPath: "/temporary/morning.jpg",
    name: "Өглөөний хоол 1 ",
    price: 4800,
    discount: 10,
    ingredients: "",
    id: "1",
  },
  {
    imgPath: "/temporary/morning.jpg",
    name: "Өглөөний хоол 2",
    price: 5800,
    discount: 20,
    ingredients: "",
    id: "2",
  },
  {
    imgPath: "/temporary/morning.jpg",
    name: "Өглөөний хоол 3",
    price: 6800,
    discount: 30,
    ingredients: "",
    id: "3",
  },
];
type foodDetailType = {
  imgPath: string;
  name: string;
  price: number;
  discount: number;
  ingredients: string;
  id?: string;
  // setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Dashboard() {
  const [c, setC] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<categoryType>();
  const [open, setOpen] = useState(false);
  const [thisFood, setThisFood] = useState<foodType>();
  const { categories, foods } = useData();
  console.log(selectedCategory);

  return (
    <>
      {/* <MyCart /> */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        {thisFood && <FoodDetail food={thisFood} setOpen={setOpen} />}
      </Backdrop>
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
                    <Stack
                      key={item._id}
                      onClick={() => {
                        setThisFood(item);
                        setOpen(true);
                      }}
                    >
                      <Card {...item} />
                    </Stack>
                  );
                })}
            {/* {new Array(10).fill(0).map((_, index) => (
              <Card
                imgPath="/temporary/morning.jpg"
                title="Өглөөний хоол"
                price={4800}
                discount={40}
              />
            ))} */}
          </Stack>
          {c && <MyCart />}
          <Button
            onClick={() => {
              setC(true);
            }}
          >
            aadsfsdfsdf
          </Button>
        </Stack>
      </CustomContainer>
    </>
  );
}
