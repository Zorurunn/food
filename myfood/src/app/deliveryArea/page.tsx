"use client";

import { CustomContainer, useData } from "@/components ";
import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Stars";

export default function Page() {
  const { apartments } = useData();
  return (
    <Stack marginBottom={10}>
      <CustomContainer maxWidth="lg">
        <Stack gap={3}>
          <Image
            src={"/temporary/map.png"}
            alt="Background Image"
            width={1200}
            height={600}
            style={{ objectFit: "contain" }}
          />
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <StarIcon sx={{ color: "primary.main" }} />
            <Typography fontWeight={800} fontSize={18}>
              Хүргэлтийн бүс дэх хаягууд
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Stack
              width={"100%"}
              boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
              padding={2}
              borderRadius={2}
              gap={3}
            >
              <Stack fontWeight={500} fontSize={20}>
                А бүс
              </Stack>
              <Divider
                sx={{
                  borderColor: "primary.main",
                  width: "100%",
                }}
              ></Divider>

              <Stack gap={1} direction={"row"} width={"100%"}>
                <Stack flexGrow={1}>
                  {apartments &&
                    apartments.map((item) => (
                      <Stack key={item._id}>{item.name}</Stack>
                    ))}
                </Stack>
                <Stack flexGrow={1}>
                  {apartments &&
                    apartments.map((item) => (
                      <Stack key={item._id}>{item.name}</Stack>
                    ))}
                </Stack>
              </Stack>
            </Stack>
            <Stack
              width={"100%"}
              boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
              padding={2}
              borderRadius={2}
              gap={3}
            >
              <Stack fontWeight={500} fontSize={20}>
                Б бүс
              </Stack>
              <Divider
                sx={{
                  borderColor: "primary.main",
                  width: "100%",
                }}
              ></Divider>

              <Stack gap={1} direction={"row"} width={"100%"}>
                <Stack flexGrow={1}>
                  {apartments &&
                    apartments.map((item) => (
                      <Stack key={item._id}>{item.name}</Stack>
                    ))}
                </Stack>
                <Stack flexGrow={1}>
                  {apartments &&
                    apartments.map((item) => (
                      <Stack key={item._id}>{item.name}</Stack>
                    ))}
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CustomContainer>
    </Stack>
  );
}
