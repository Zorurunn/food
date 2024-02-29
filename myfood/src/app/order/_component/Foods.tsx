import { State, useData } from "@/components ";
import { InCartFood } from "@/components /orderDetail/InCartFood";
import { useAmount } from "@/components /providers/AmountProvider";
import { Divider, Stack, Typography } from "@mui/material";

export const Foods = () => {
  const { inCart } = useData();
  const { priceAmount } = useAmount();
  return (
    <Stack gap={2} width={"100%"} height={"100%"}>
      {inCart &&
        inCart.map((item) => {
          return (
            <Stack gap={2} key={item.food._id}>
              <Divider></Divider>
              <InCartFood
                {...item}
                fontSize={16}
                imgHeight={120}
                isSimple={true}
              />
            </Stack>
          );
        })}
    </Stack>
  );
};
