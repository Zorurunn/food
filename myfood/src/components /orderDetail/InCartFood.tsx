import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useData } from "..";
import { AddCard } from "@mui/icons-material";
import { basketFoodType } from "@/common";
import { DiscountedImage } from "../DiscountedImage";
import { useAmount } from "../providers/AmountProvider";

type sizeType = {
  fontSize?: number;
  imgHeight?: number;
  isSimple?: boolean;
};
export const InCartFood = (props: basketFoodType & sizeType) => {
  const { minusQuantity, addQuantity } = useData();
  const { discountCalculate } = useAmount();
  const {
    imgPath,
    name,
    price,
    discount,
    _id,
    ingredients,
    quantity,
    fontSize,
    imgHeight,
    isSimple = false,
  } = props;
  return (
    <Stack
      maxWidth={"800px"}
      direction={"row"}
      width={"100%"}
      height={imgHeight ?? 200}
      gap={2}
    >
      {/* IMAGE */}
      {/* <Stack flexGrow={1}>
        <Stack position={"relative"} width={"100%"} height={"100%"}>
          <Image
            src={imgPath}
            alt="Breakfast"
            fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
      </Stack> */}
      <Stack flexGrow={1}>
        <DiscountedImage imgPath={imgPath ?? ""} discount={discount} />
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
            <Stack gap={1} justifyContent={"space-between"} height={"100%"}>
              <Typography fontSize={fontSize ?? 20} fontWeight={800}>
                {name}
              </Typography>
              <Typography
                fontSize={fontSize ?? 20}
                fontWeight={800}
                color={"primary.main"}
              >
                {discount
                  ? discountCalculate({ price: price, discount: discount })
                  : price}
                ₮
              </Typography>
              {!isSimple && (
                <Typography
                  color={"text.secondary"}
                  height={200}
                  overflow={"scroll"}
                  fontSize={fontSize ?? 14}
                >
                  {ingredients}
                </Typography>
              )}

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "primary.main",
                    width: fontSize ? 30 : 40,
                    height: fontSize ? 30 : 40,
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    ":hover": {
                      color: "text.primary",
                    },
                  }}
                  onClick={() => {
                    minusQuantity(_id ?? "");
                  }}
                >
                  <RemoveIcon />
                </Stack>
                <Typography fontSize={fontSize ?? 20}>{quantity}</Typography>
                <Stack
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "primary.main",
                    width: fontSize ? 30 : 40,
                    height: fontSize ? 30 : 40,
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    ":hover": {
                      color: "text.primary",
                    },
                  }}
                  onClick={() => {
                    addQuantity(_id ?? "");
                  }}
                >
                  <AddIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
