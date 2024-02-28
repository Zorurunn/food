import {
  AbsContRight,
  Card,
  CustomInput,
  HeadText,
  useData,
} from "@/components ";
import {
  Button,
  ButtonBase,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { InCartFood } from "./InCartFood";
export const MyCart = () => {
  const { inCart, addCart } = useData();
  // console.log(baskets);

  return (
    <AbsContRight width="60%">
      <Stack gap={2}>
        <Stack direction={"row"} paddingY={2}>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <KeyboardArrowLeftIcon />
          </Stack>
          <Stack
            flexGrow={1}
            justifyContent={"center"}
            alignItems={"center"}
            fontWeight={800}
            fontSize={18}
          >
            Таны сагс
          </Stack>
        </Stack>

        {inCart &&
          inCart.map((item) => {
            return (
              <Stack gap={2} key={item.food._id}>
                <Divider></Divider>
                <InCartFood
                  imgPath={item.food.imgPath}
                  foodname={item.food.name}
                  price={item.food.price}
                  recipe={item.food.ingredients}
                  countity={item.quantity}
                  _id={item.food._id}
                />
              </Stack>
            );
          })}
        <Stack
          height={200}
          sx={{ border: "1px solid red" }}
          justifyContent={"center"}
          alignItems={"center"}
          width={"100%"}
        >
          <Stack
            width={"100%"}
            direction={"row"}
            justifyContent={"space-between"}
            padding={2}
            height={80}
          >
            <Stack>
              <Typography fontSize={18} color={"text.secondary"}>
                Нийт төлөх дүн
              </Typography>
              <Typography fontSize={18} fontWeight={800}>
                34,800₮
              </Typography>
            </Stack>
            <Stack
              width={"50% "}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                backgroundColor: "primary.main",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Захиалах
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </AbsContRight>
  );
};

{
  /* <Stack></Stack>
<Stack></Stack>
<Stack></Stack>
<Stack></Stack>
<Stack></Stack>
<Stack></Stack>
<Stack></Stack> */
}

{
  /* <Grid container spacing={2}>
            {new Array(10).fill(0).map((_, index) => (
              <Grid item key={index} xs={10} sm={5} md={3} lg={10}>
                <Stack position={"relative"} width={"100%"} paddingTop={"100%"}>
                  <Image
                    src={"/temporary/morning.jpg"}
                    alt="Breakfast"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Stack>
              </Grid>
            ))}
          </Grid> */
}

{
  /* <Grid container spacing={2} width={"100%"} border={"2px solid red"}>
<Grid item xs={2} sm={2} md={2} lg={2} width={"100%"}>
  <Stack position={"relative"} width={"100%"} paddingTop={"100%"}>
    <Image
      src={"/temporary/morning.jpg"}
      alt="Breakfast"
      fill
      style={{ objectFit: "cover" }}
    />
  </Stack>
</Grid>
<Grid item xs={2} sm={2} md={2} lg={2}>
  <Stack position={"relative"} width={"100%"} paddingTop={"100%"}>
    <Image
      src={"/temporary/morning.jpg"}
      alt="Breakfast"
      fill
      style={{ objectFit: "cover" }}
    />
  </Stack>
</Grid>
</Grid> */
}
