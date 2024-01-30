import { CustomInput, HeadText } from "@/components ";
import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

export const FoodDetail = () => {
  return (
    <Stack
      width="100%"
      height="100vh"
      bgcolor="#00000070"
      position="absolute"
      top={0}
      left={0}
      zIndex={2}
    >
      <Stack
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
        }}
        borderRadius={5}
        bgcolor={"#fff"}
        padding={3}
        width={"80%"}
      >
        <Stack
          sx={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)" }}
          width={"100%"}
          gap={4}
          padding={"30px"}
        >
          <Stack position={"relative"} width={"100%"} paddingTop={"100%"}>
            <Image
              src={"/temporary/morning.jpg"}
              alt="Breakfast"
              fill
              style={{ objectFit: "cover" }}
            />
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Stack gap={4} width={"90%"}>
              <Stack>
                <Typography fontSize={20} fontWeight={800}>
                  Main pizza
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={800}
                  color={"primary.main"}
                >
                  34,800₮
                </Typography>
              </Stack>
              <Stack gap={1.2}>
                <Typography fontSize={20} fontWeight={800}>
                  Орц
                </Typography>
                <Typography
                  color={"text.secondary"}
                  padding={"8px"}
                  borderRadius={2}
                  sx={{ backgroundColor: "grey.200" }}
                >
                  Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр
                </Typography>
              </Stack>
              <Stack gap={4}>
                <Typography fontSize={20} fontWeight={800}>
                  Тоо
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Button
                    sx={{
                      backgroundColor: "primary.main",
                      width: 40,
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      ":hover": {
                        color: "text.primary",
                        // border: "1px solid",
                        // borderColor: "text.primary",
                      },
                    }}
                  >
                    <Typography fontSize={30} width={"100%"}>
                      -
                    </Typography>
                  </Button>
                  <Typography>Тоо</Typography>
                  <Button
                    sx={{
                      backgroundColor: "primary.main",
                      width: 40,
                      color: "#fff",
                      justifyContent: "center",
                      alignItems: "center",
                      ":hover": {
                        color: "text.primary",
                        // border: "1px solid",
                        // borderColor: "text.primary",
                      },
                    }}
                  >
                    <Typography fontSize={30} width={"100%"}>
                      +
                    </Typography>
                  </Button>
                </Stack>
                <Button
                  sx={{
                    backgroundColor: "primary.main",
                    width: "100%",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                    ":hover": {
                      color: "text.primary",
                      // border: "1px solid",
                      borderColor: "text.primary",
                    },
                  }}
                >
                  <Typography fontSize={14} width={"100%"}>
                    Сагслах
                  </Typography>
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
