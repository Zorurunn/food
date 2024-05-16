import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export const DiscountedImage = ({
  discount,
  imgPath,
}: {
  discount: number;
  imgPath: string;
}) => {
  return (
    <Stack position={"relative"} width={"100%"} height={"100%"}>
      <Stack
        position={"absolute"}
        top={0}
        left={0}
        width={"100%"}
        height={"100%"}
      >
        <Image
          src={imgPath}
          alt="Breakfast"
          fill
          style={{ objectFit: "cover" }}
        />
        <Stack
          position={"absolute"}
          zIndex={2}
          width={"20%"}
          height={"10%"}
          top={"5%"}
          right={"5%"}
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
    </Stack>
  );
};
