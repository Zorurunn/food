import { foodType } from "@/common";
import { Backdrop, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { useData } from ".";
import { useBackDrop } from "./providers/BackDropProvider";

export const Card = (props: foodType) => {
  const { setSelectedFood, selectedFood } = useData();
  const { setOpenFoodDetail, setOpenEditFood } = useBackDrop();
  const { imgPath, price, name, discount } = props;
  const [isHover, setIsHover] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Stack
      gap={1.7}
      width={"100%"}
      onClick={() => {
        setSelectedFood(props);
        if (isAdmin) {
          setOpenEditFood(true);
        } else {
          setOpenFoodDetail(true);
        }
      }}
      sx={{ cursor: "pointer" }}
    >
      <Stack
        position={"relative"}
        paddingTop={"65%"}
        border={"1px solid transparent"}
        borderRadius={5}
        overflow={"hidden"}
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          setIsHover(false);
        }}
      >
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          open={isHover}
        >
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ backgroundColor: "#fff", borderRadius: 2 }}
            paddingX={2}
          >
            <Typography color={"text.primary"}>
              {isAdmin ? "Edit" : "Food Detail"}
            </Typography>
          </Stack>
        </Backdrop>
        <Stack position={"absolute"} top={0} left={0}>
          <img
            src={imgPath}
            alt="Breakfast"
            width={"100%"}
            height={"100%"}
            // fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
        <Stack
          position={"absolute"}
          zIndex={2}
          width={"20%"}
          height={"20%"}
          top={"10%"}
          right={"10%"}
          sx={{
            backgroundColor: "primary.main",
            border: "2px solid white",
            borderRadius: 10,
            display: discount ? "flex" : "none",
          }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography fontSize={20} fontWeight={600} color={"white"}>
            {discount}%
          </Typography>
        </Stack>
      </Stack>
      <Stack>
        <Typography fontSize={20} fontWeight={600} color="text.primary">
          {name}
        </Typography>
        <Stack direction={"row"} gap={2}>
          <Typography
            fontSize={18}
            fontWeight={800}
            color="primary.main"
            sx={{ display: discount ? "flex" : "none" }}
          >
            {discount ? price - (price * discount) / 100 : 0}₮
          </Typography>
          <Typography
            fontSize={18}
            fontWeight={800}
            color={discount ? "text.primary" : "primary.main"}
            sx={{
              textDecoration: discount ? "line-through" : "none",
            }}
          >
            {price}₮
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

{
  /* <Card
imgPath="/temporary/morning.jpg"
name="Өглөөний хоол"
price="4,800"
discountPrice="4,800"
discount="20"
/> */
}
