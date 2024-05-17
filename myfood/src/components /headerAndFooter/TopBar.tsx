"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Backdrop, Button, Drawer, Stack, Typography } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import {
  AbsContCenter,
  CustomContainer,
  CustomInput,
  useAuth,
  useData,
} from "..";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useBackDrop } from "../providers/BackDropProvider";
import { useAmount } from "../providers/AmountProvider";
import Link from "next/link";

export const TopBar = () => {
  const { isLoggedIn, user } = useAuth();
  const { setOpenLogin } = useBackDrop();
  const { orderAmount } = useAmount();
  const {
    isDisplay,
    setIsDisplay,
    inCart,
    setInCart,
    setSearchValue,
    searchValue,
  } = useData();
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
      setOpenLogin(true);
    }
  };

  return (
    <>
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isDisplay}
      >
        <Login />
      </Backdrop> */}

      <CustomContainer maxWidth="lg">
        <Stack
          direction={"row"}
          justifyContent="space-between"
          sx={{ height: "60px" }}
        >
          <Stack direction={"row"} gap={3} alignItems={"center"}>
            <Link href={"/"}>
              <RamenDiningIcon sx={{ fontSize: 30 }} />
            </Link>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Link href={"/"}>
                <Button sx={{ color: "black" }}>Home</Button>
              </Link>
              <Link href={"/menu"}>
                <Button sx={{ color: "black" }}>Food menu</Button>
              </Link>
              <Link href={"/deliveryArea"}>
                <Button sx={{ color: "black" }}>Delivery area</Button>
              </Link>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <CustomInput
              placeHolder="Search"
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
                <Badge
                  badgeContent={inCart.length ? orderAmount : 0}
                  color="error"
                >
                  <AddShoppingCartIcon sx={{ fontSize: 20 }} />
                </Badge>

                <Typography fontSize={14}>Cart</Typography>
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
                  {isLoggedIn ? "User" : "Sign in"}
                </Typography>
              </Stack>
            </Button>
            <Button
              sx={{
                textTransform: "none",
                color: "text.primary",
                display: isLoggedIn && user?.role === "admin" ? "flex" : "none",
              }}
              onClick={() => {
                router.push("/foodMenu");
              }}
            >
              <Stack
                direction={"row"}
                gap={1}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <AdminPanelSettingsOutlinedIcon sx={{ fontSize: 20 }} />
                <Typography fontSize={14}>Admin</Typography>
              </Stack>
            </Button>
          </Stack>
        </Stack>
      </CustomContainer>
    </>
  );
};
