"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomContainer } from "..";
type CustomButtonProps = {
  title: string;
  width: string;
  textSize: string;
};

export const Footer = () => {
  return (
    <Stack
      sx={{ backgroundColor: "primary.main" }}
      position={"relative"}
      justifyContent={"center"}
    >
      <CustomContainer maxWidth="lg">
        <Stack gap={5} marginTop={"80px"} marginBottom={"80px"}>
          <Stack
            direction={"row"}
            justifyContent={"center"}
            gap={1}
            color={"#fff"}
          >
            <RamenDiningIcon />
            <Typography fontWeight={800} fontSize={20}>
              Food Delivery
            </Typography>
          </Stack>
          <Stack
            color={"#fff"}
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Typography
              fontWeight={600}
              fontSize={16}
              sx={{ textDecoration: "underline", textDecorationColor: "#fff" }}
            >
              Нүүр
            </Typography>
            <Typography fontWeight={600} fontSize={16}>
              Холбоо барих
            </Typography>
            <Typography fontWeight={600} fontSize={16}>
              Хоолны цэс
            </Typography>
            <Typography fontWeight={600} fontSize={16}>
              Үйлчилгээний нөхцөл
            </Typography>
            <Typography fontWeight={600} fontSize={16}>
              Хүргэлтийн бүс
            </Typography>
            <Typography fontWeight={600} fontSize={16}>
              Нууцлалын бодлого
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            color={"#fff"}
            gap={1}
            justifyContent={"center"}
          >
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Stack>

          <Divider sx={{ bgcolor: "#fff" }}></Divider>
          <Stack direction={"row"} color={"#fff"} justifyContent={"center"}>
            <Typography fontSize={16}>© 2024 Pinecone Foods LLC </Typography>
          </Stack>
          <Stack direction={"row"} color={"#fff"} justifyContent={"center"}>
            <Typography fontSize={16}>
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Stack>
      </CustomContainer>
      <Image
        src={"/temporary/Bg.png"}
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
      />
    </Stack>
  );
};
