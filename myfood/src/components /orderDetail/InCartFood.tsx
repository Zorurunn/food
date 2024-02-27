import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useData } from "..";
type InCartFood = {
  imgPath: string;
  foodname: string;
  price: number;
  discountPersentage?: number;
  recipe: string;
  countity: number | undefined;
};
export const InCartFood = (props: InCartFood) => {
  const { baskets } = useData();
  const { imgPath, foodname, price, discountPersentage, recipe, countity } =
    props;
  return (
    <Stack
      maxWidth={"800px"}
      direction={"row"}
      width={"100%"}
      height={200}
      gap={2}
    >
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
                {foodname}
              </Typography>
              <Typography fontSize={20} fontWeight={800} color={"primary.main"}>
                {price}
              </Typography>
              <Typography color={"text.secondary"}>{recipe}</Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "primary.main",
                    width: 40,
                    height: 40,
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    ":hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  <RemoveIcon />
                </Stack>
                <Typography>{countity}</Typography>
                <Stack
                  sx={{
                    cursor: "pointer",
                    backgroundColor: "primary.main",
                    width: 40,
                    height: 40,
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 2,
                    ":hover": {
                      color: "text.primary",
                    },
                  }}
                >
                  <AddIcon />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          {/* <Image
            src={imgPath}
            alt="Breakfast"
            fill
            style={{ objectFit: "cover" }}
          /> */}
        </Stack>
        {/* <Stack gap={1}>
          <Typography fontSize={20} fontWeight={800}>
            {foodname}
          </Typography>
          <Typography fontSize={20} fontWeight={800} color={"primary.main"}>
            {price}
          </Typography>
          <Typography color={"text.secondary"}>{recipe}</Typography>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              sx={{
                cursor: "pointer",
                backgroundColor: "primary.main",
                width: 40,
                height: 40,
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                ":hover": {
                  color: "text.primary",
                },
              }}
            >
              <RemoveIcon />
            </Stack>
            <Typography>Тоо</Typography>
            <Stack
              sx={{
                cursor: "pointer",
                backgroundColor: "primary.main",
                width: 40,
                height: 40,
                color: "#fff",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 2,
                ":hover": {
                  color: "text.primary",
                },
              }}
            >
              <AddIcon />
            </Stack>
          </Stack>
        </Stack> */}
      </Stack>
    </Stack>
  );
};
