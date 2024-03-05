"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Backdrop, Button, Drawer, Stack, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import {
  AbsContCenter,
  CustomContainer,
  CustomInput,
  Login,
  State,
  useAuth,
  useData,
} from "..";
import { ChangeEvent, useEffect, useState } from "react";
import { Notify } from "../notfication/ Notify";
import { Test } from "../notfication/Test";
import { Absolute } from "@/app/userProfile/_components/Absolute";
import { useRouter } from "next/navigation";
import { MyCart } from "../orderDetail/MyCart";
import { useBackDrop } from "../providers/BackDropProvider";
import { useAmount } from "../providers/AmountProvider";

export const TopBar = () => {
  const { orderAmount } = useAmount();
  const {
    isDisplay,
    setIsDisplay,
    inCart,
    setInCart,
    setSearchValue,
    searchValue,
  } = useData();
  const { isLoggedIn } = useAuth();
  const { toggleMyCart } = useBackDrop();
  const router = useRouter();
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const profileClicked = () => {
    if (isLoggedIn) {
      router.push("/userProfile");
    } else {
      setIsDisplay(true);
    }
  };

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isDisplay}
      >
        <Login />
      </Backdrop>

      <CustomContainer maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent="space-between"
          sx={{ height: "60px" }}
        >
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <RamenDiningIcon sx={{ fontSize: 30 }} />
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Typography
                fontSize={14}
                onClick={() => {
                  router.push("/dashboard");
                }}
                sx={{ cursor: "pointer" }}
              >
                НҮҮР
              </Typography>
              <Typography
                fontSize={14}
                onClick={() => {
                  router.push("/menu");
                }}
                sx={{ cursor: "pointer" }}
              >
                ХООЛНЫ ЦЭС
              </Typography>
              <Typography
                fontSize={14}
                onClick={() => {
                  router.push("/deliveryArea");
                }}
                sx={{ cursor: "pointer" }}
              >
                ХҮРГЭЛТИЙН БҮС
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <CustomInput
              placeHolder="Хайх"
              value={searchValue}
              handleChange={handleChange}
              type="text"
              adornment="start"
              size="small"
              width={200}
              borderColor="text.primary"
            />

            <Button
              sx={{ textTransform: "none", color: "text.primary" }}
              onClick={toggleMyCart(true)}
            >
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <Badge badgeContent={orderAmount} color="error">
                  <AddShoppingCartIcon sx={{ fontSize: 20 }} />
                </Badge>

                <Typography fontSize={14}>Сагс</Typography>
              </Stack>
            </Button>

            <Button
              sx={{ textTransform: "none", color: "text.primary" }}
              onClick={profileClicked}
            >
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <PermIdentityIcon sx={{ fontSize: 20 }} />
                <Typography fontSize={14}>
                  {isLoggedIn ? "Хэрэглэгч" : "Нэвтрэх"}
                </Typography>
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </CustomContainer>
    </>
  );
};
