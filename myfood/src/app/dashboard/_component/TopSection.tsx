"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { CustomContainer } from "@/components ";

export const TopSection = () => {
  return (
    <Stack
      sx={{ backgroundColor: "primary.main" }}
      position={"relative"}
      justifyContent={"center"}
    >
      <CustomContainer maxWidth="lg">
        <Stack justifyContent={"center"} alignItems={"center"}>
          <Stack
            sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
            width={"90%"}
            padding={"80px 80px 80px 80px"}
          >
            <Stack
              gap={1}
              width={"100%"}
              height={"100%"}
              justifyContent={"center"}
            >
              <Stack width={280}>
                <Stack
                  direction={"row"}
                  color={"#fff"}
                  gap={1}
                  justifyContent={"center"}
                >
                  <Typography fontSize={35} fontWeight={600}>
                    Pinecone Food delivery
                  </Typography>
                </Stack>

                <Divider sx={{ bgcolor: "#fff" }}></Divider>
                <Stack
                  direction={"row"}
                  color={"#fff"}
                  justifyContent={"center"}
                >
                  <Typography fontSize={16}>
                    Horem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack width={"80%"} paddingTop={"100%"} position={"relative"}>
              <Image
                src={"/temporary/food1.png"}
                alt="Background Image"
                fill
                style={{ objectFit: "contain" }}
              />
            </Stack>
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
