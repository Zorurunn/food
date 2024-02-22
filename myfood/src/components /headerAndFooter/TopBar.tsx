"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Backdrop, Button, Stack, Typography } from "@mui/material";
import {
  AbsContCenter,
  CustomContainer,
  CustomInput,
  Login,
  State,
  useAuth,
  useData,
} from "..";
import { ChangeEvent, useState } from "react";
import { Notify } from "../notfication/ Notify";
import { Test } from "../notfication/Test";
import { Absolute } from "@/app/userProfile/_components/Absolute";
import { useRouter } from "next/navigation";

export const TopBar = () => {
  const { isDisplay, setIsDisplay } = useData();
  const { isLoggedIn } = useAuth();
  const [searchVal, setSearchVal] = useState("");
  const router = useRouter();
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setSearchVal(event.target.value);
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

        // onClick={handleClose}
      >
        <Login />
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
      {/* {isDisplay && (
        <Backdrop   sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isDisplay}>
          <Login />
        </BackDrop>
      )} */}
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
                  router.push("/");
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
              <Typography fontSize={14}>ХҮРГЭЛТИЙН БҮС</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <CustomInput
              placeHolder="Хайх"
              value={searchVal}
              handleChange={handleChange}
              type="text"
              adornment="start"
              size="small"
              width={200}
              borderColor="text.primary"
            />
            <Stack direction={"row"} gap={1} alignItems={"center"}>
              <AddShoppingCartIcon sx={{ fontSize: 20 }} />
              <Typography fontSize={14}>Сагс</Typography>
            </Stack>
            <Stack
              direction={"row"}
              gap={1}
              alignItems={"center"}
              onClick={profileClicked}
              sx={{ cursor: "pointer" }}
            >
              <PermIdentityIcon sx={{ fontSize: 20 }} />
              <Typography fontSize={14}>
                {isLoggedIn ? "Хэрэглэгч" : "Нэвтрэх"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        {/* {Test()} */}
        {/* <Notify message="Амжилттай бүртгэгдлээ." color="primary.main" /> */}
        {/* <State /> */}
      </CustomContainer>
    </>
  );
};
