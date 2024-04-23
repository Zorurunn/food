"use client";
import { AbsContCenter, AbsContRight, CustomInput, Login } from "@/components ";
import { Dashboard } from "@/components /dashboard/DashBoard";
// import { FoodDetail } from "@/components /orderDetail/FoodDetail";
import { MyCart } from "@/components /orderDetail/MyCart";
// import { OrderStep } from "@/components /orderDetail/OrderStep";
import { NotFound } from "@/components /search/NotFound";
import ProfileImage from "@/components /userProfile/ProfileImage";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  return <Dashboard />;
}
