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
import { Card, CustomContainer, FoodDetail } from "@/components ";
import { Category } from "./_component/Category";
import { SearchedValue } from "@/components /search/SearchedValue";
import { ButtonCategory } from "./_component/ButtonCategory";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "@/common";
import { log } from "console";

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

export type foodType = {
  _id?: string;
  name: string;
  ingredients: string;
  imgPath: string;
  price: number;
  discount: number;
  category: string;
};
export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("");
  const [open, setOpen] = useState(false);
  const [thisFood, setThisFood] = useState<foodDetailType>({
    imgPath: "/temporary/morning.jpg",
    name: "Өглөөний хоол 0",
    price: 3800,
    discount: 0,
    ingredients: "",
  });
  const [foods, setFoods] = useState<foodType[]>([
    {
      _id: "65d70dedb53b03aa823adc5flll",
      name: "pizza",
      ingredients: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр  ",
      imgPath: "/temporary/morning.jpg",
      price: 10000,
      discount: 10,
      category: "breakfast",
    },
  ]);
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
  console.log(thisFood);

  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <FoodDetail {...thisFood} setOpen={setOpen} />
      </Backdrop>
      <CustomContainer maxWidth="lg">
        <Stack gap={8}>
          <Stack
            direction={"row"}
            sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
            width={"100%"}
            gap={2}
          >
            {buttons.map((item) => {
              return (
                <ButtonCategory
                  key={item}
                  title={item}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                  setSelectedOption={setSelectedOption}
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
            {foods.map((item) => {
              // const { imgPath, name, price, discount } = item;
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
        </Stack>
      </CustomContainer>
    </>
  );
}
