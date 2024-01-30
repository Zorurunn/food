import { AbsContRight, Card, CustomInput, HeadText } from "@/components ";
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
  return (
    <AbsContRight width="60%">
      <Stack gap={2}>
        <Stack>
          <KeyboardArrowLeftIcon />
          <Typography>Таны сагс</Typography>
        </Stack>

        {new Array(10).fill(0).map((_, index) => (
          <InCartFood
            imgPath="/temporary/morning.jpg"
            foodname="Main Pizza"
            price={38400}
            recipe="Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр"
          />
        ))}
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
