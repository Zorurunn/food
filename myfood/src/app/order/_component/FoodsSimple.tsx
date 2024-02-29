import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { AddCard } from "@mui/icons-material";
import { addCartType } from "@/common";
import { useData } from "@/components ";

export const InCartFood = (props: addCartType) => {
  const { minusQuantity, addQuantity } = useData();
  const { food, quantity } = props;
  const { imgPath, name, price, discount, ingredients, _id } = food;
  return (
    <Stack
      maxWidth={"800px"}
      direction={"row"}
      width={"100%"}
      height={200}
      gap={2}
    >
      {/* IMAGE */}
      <Stack flexGrow={1}>
        <Stack position={"relative"} width={"100%"} height={"100%"}>
          <Image
            src={imgPath}
            alt="Breakfast"
            fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
      </Stack>

      {/* FOOD DETAIL */}
      <Stack flexGrow={1}>
        <Stack position={"relative"} width={"100%"} height={"100%"}>
          <Stack
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            top={0}
            left={0}
          >
            <Stack gap={1}>
              <Typography fontSize={20} fontWeight={800}>
                {name}
              </Typography>
              <Typography fontSize={20} fontWeight={800} color={"primary.main"}>
                {price}
              </Typography>
              <Typography color={"text.secondary"}>{ingredients}</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
