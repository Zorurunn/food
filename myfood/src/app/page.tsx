"use client";
import { AbsContCenter, AbsContRight, CustomInput, Login } from "@/components ";
import { FoodDetail } from "@/components /orderDetail/FoodDetail";
import { MyCart } from "@/components /orderDetail/MyCart";
import { NotFound } from "@/components /search/NotFound";
import { Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const router = useRouter();
  return (
    <Stack flex={1}>
      <MyCart />
      {/* <FoodDetail /> */}
      {/* <NotFound /> */}
    </Stack>
  );
}

// const [value, setValue] = useState("");
// const handleChange = (
//   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
// ) => {
//   event.preventDefault();
//   setValue(event.target.value);
// };
// const [isDisabled, setIsDisabled] = useState(false);
// const error = true;
// return (
//   <div>
//     <CustomInput
//       label={"E-mail"}
//       value={value}
//       handleChange={handleChange}
//       type="password"
//     />
//     <button
//       onClick={() => {
//         setIsDisabled((prev) => !prev);
//       }}
//     >
//       Disable Input
//     </button>
//   </div>
// );
