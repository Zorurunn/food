"use client";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button, Stack, Typography } from "@mui/material";
import { CustomContainer, CustomInput, State } from "..";
import { ChangeEvent, useState } from "react";
import { Notify } from "../notfication/ Notify";
import { Test } from "../notfication/Test";
type CustomButtonProps = {
  title: string;
  width: string;
  textSize: string;
};

export const TopBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const isLoggedIn = false;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setSearchVal(event.target.value);
  };

  return (
    <CustomContainer maxWidth="lg">
      <Stack
        direction={"row"}
        justifyContent="space-between"
        sx={{ height: "60px" }}
      >
        <Stack direction={"row"} gap={3} alignItems={"center"}>
          <RamenDiningIcon sx={{ fontSize: 30 }} />
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography fontSize={14}>НҮҮР</Typography>
            <Typography fontSize={14}>ХООЛНЫ ЦЭС</Typography>
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
          <Stack direction={"row"} gap={1} alignItems={"center"}>
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
  );
};
