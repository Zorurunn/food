import { CustomInput, HeadText } from "@/components ";
import { Button, Stack, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { useSearchParams } from "next/navigation";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";

export const ForgotPassword = () => {
  const searchParams = useSearchParams();

  const step = searchParams.get("step");

  if (step === "1") {
    return <Step1 />;
  } else if (step === "2") {
    return <Step2 />;
  } else if (step === "3") {
    return <Step3 />;
  }
};
