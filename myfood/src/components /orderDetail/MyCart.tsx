import { Stack } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { OrderDetail } from "./OrderDetail";
import { useData } from "..";
type toggleDrawerType = {
  toggleDrawer: (newOpen: boolean) => () => void;
};
export const MyCart = (props: toggleDrawerType) => {
  const { inCart } = useData();
  return (
    <Stack gap={2} width={650} paddingX={3}>
      <Stack direction={"row"} paddingY={2}>
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          onClick={props.toggleDrawer(false)}
          sx={{
            cursor: "pointer",
          }}
        >
          <KeyboardArrowLeftIcon />
        </Stack>
        <Stack
          flexGrow={1}
          justifyContent={"center"}
          alignItems={"center"}
          fontWeight={800}
          fontSize={18}
        >
          Таны сагс
        </Stack>
      </Stack>
      {inCart.length ? <OrderDetail /> : "Таны сагс хоосон байна"}
    </Stack>
  );
};
