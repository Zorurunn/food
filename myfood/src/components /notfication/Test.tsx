import { Stack } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { Notify } from "./ Notify";

// const Msg = ({ closeToast, toastProps }) => (
const Msg = () => (
  <Stack
    direction={"row"}
    gap={1}
    // color={color}
    borderRadius={2}
    padding={"10px 18px"}
    boxShadow={
      "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
    }
    width={300}
    justifyContent={"center"}
  >
    <CheckIcon />
    {/* {message} */}
    Амжилттай бүртгэгдлээ.
  </Stack>
  //   <div>
  //     Lorem ipsum dolor {toastProps.position}
  //     <button>Retry</button>
  //     <button onClick={closeToast}>Close</button>
  //   </div>
);

export function Test() {
  const displayMsg = () => {
    toast(<Notify message="Амжилттай бүртгэгдлээ." color="primary.main" />);
    // toast(Msg) would also work
  };

  return (
    <div>
      <button onClick={displayMsg}>Click me</button>
      <ToastContainer />
    </div>
  );
}
