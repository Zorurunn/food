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
import { ChangeEvent, useEffect, useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { InCartFood } from "./InCartFood";
import { log } from "console";
type toggleDrawerType = {
  toggleDrawer: (newOpen: boolean) => () => void;
};
export const MyCart = (props: toggleDrawerType) => {
  const [amount, setAmount] = useState<number>(0);
  const { inCart, addCart } = useData();
  useEffect(() => {
    const amountArray = inCart.map((item) => {
      return item.food.price * item.quantity;
    });
    // const a = amountArray.map((item) => {
    //   // return item

    // });
    const result = amountArray.reduce(
      (total, currentValue) => (total = total + currentValue),
      0
    );
    // console.log("result:", result);
    setAmount(result);
  }, [inCart]);
  return (
    <Stack gap={2} width={650} paddingX={3}>
      <Stack direction={"row"} paddingY={2}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          onClick={props.toggleDrawer(false)}
          sx={{
            cursor: "pointer",
          }}
        >
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
              <InCartFood {...item} />
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
              {amount}
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
