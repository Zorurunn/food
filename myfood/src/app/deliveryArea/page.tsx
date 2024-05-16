"use client";

import { CustomContainer, useData } from "@/components ";
import { Divider, Stack, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Stars";
const address = [
  "Нархан хотхон",
  "26-р байр",
  "28-р байр",
  "45-р байр",
  "3-р байр",
  "Хоймор хотхон",
  "Хоймор хотхон",
];
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
          <Stack flexDirection={{ xs: "column", md: "row" }} gap={3}>
            <Stack width={1} p={3} borderRadius={2} boxShadow={1}>
              <Stack gap={2}>
                <Typography
                  py={2}
                  borderBottom={1}
                  fontSize={20}
                  fontWeight={590}
                  borderColor={"primary.main"}
                >
                  А бүс
                </Typography>
                <Stack flexDirection={"row"} gap={2}>
                  <Stack width={1} gap={2}>
                    {address.map((item, index) => (
                      <Typography fontSize={16} fontWeight={400} key={index}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                  <Stack width={1} gap={2}>
                    {address.map((item, index) => (
                      <Typography fontSize={16} fontWeight={400} key={index}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack width={1} p={3} borderRadius={2} boxShadow={2}>
              <Stack gap={2}>
                <Typography
                  py={2}
                  borderBottom={1}
                  fontSize={20}
                  fontWeight={590}
                  borderColor={"primary.main"}
                >
                  Б бүс
                </Typography>
                <Stack flexDirection={"row"} gap={2}>
                  <Stack width={1} gap={2}>
                    {address.map((item, index) => (
                      <Typography fontSize={16} fontWeight={400} key={index}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                  <Stack width={1} gap={2}>
                    {address.map((item, index) => (
                      <Typography fontSize={16} fontWeight={400} key={index}>
                        {item}
                      </Typography>
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </CustomContainer>
    </Stack>
  );
}
