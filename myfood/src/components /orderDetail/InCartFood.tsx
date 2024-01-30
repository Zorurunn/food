import { Button, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
type InCartFood = {
  imgPath: string;
  foodname: string;
  price: number;
  discountPersentage?: number;
  recipe: string;
};
export const InCartFood = (props: InCartFood) => {
  const { imgPath, foodname, price, discountPersentage, recipe } = props;
  return (
    <Grid container maxWidth={"800px"} spacing={2} sx={{ height: "200px" }}>
      <Grid item xs={6}>
        <Stack position={"relative"} width={"100%"} height={"100%"}>
          <Image
            src={imgPath}
            alt="Breakfast"
            fill
            style={{ objectFit: "cover" }}
          />
        </Stack>
      </Grid>
      <Grid item xs={6}>
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
        </Stack>
      </Grid>
    </Grid>
  );
};
