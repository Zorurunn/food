"use client";
import { useAuth } from "@/components ";
import { LoaderPage } from "@/components /LoaderPage";
import { Dashboard } from "@/components /dashboard/DashBoard";
import { Stack } from "@mui/material";
export default function Home() {
  const { isLoading } = useAuth();
  return <Stack>{isLoading ? <LoaderPage /> : <Dashboard />}</Stack>;
}
