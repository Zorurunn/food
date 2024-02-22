"use client";
import { Stack } from "@mui/material";
import { ForgotPassword } from "./_components/ForgotPassword";
import { Dispatch, SetStateAction, useState } from "react";
import { Step1 } from "./_components/Step1";
import { Step2 } from "./_components/Step2";
import { Step3 } from "./_components/Step3";

// export type stepType = {
//   setStep: Dispatch<SetStateAction<number>>;
// };
export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <Stack marginTop={"40px"} marginBottom={"40px"}>
      {step === 1 && <Step1 setStep={setStep} />}
      {step === 2 && <Step2 setStep={setStep} />}
      {step === 3 && <Step3 setStep={setStep} />}
    </Stack>
  );
}

// export type stepType = {
//   setStep: Dispatch<SetStateAction<number>>;
// };
// export default function Home() {
//   const [step, setStep] = useState(1);
//   return (
//     <Stack marginTop={"40px"} marginBottom={"40px"}>
//       {step === 1 && <Step1 setStep={setStep} />}
//       {step === 2 && <Step2 />}
//       {step === 3 && <Step3 />}
//     </Stack>
//   );
// }
