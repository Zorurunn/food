import { basketFoodType } from "@/common";
import { State } from "@/components ";
import { useOrderData } from "@/components /providers/OrderDataProvider";
import { Divider, Stack, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useEffect } from "react";
type orderHistoriesType = {
  setFoods: Dispatch<SetStateAction<basketFoodType[] | undefined>>;
  setOrderId: Dispatch<SetStateAction<string>>;
  selectedOrder: string | undefined;
  setSelectedOrder: Dispatch<SetStateAction<string | undefined>>;
};
export const OrderHistories = (props: orderHistoriesType) => {
  const { setFoods, setOrderId, selectedOrder, setSelectedOrder } = props;
  const { myOrders } = useOrderData();

  if (!myOrders) return <Stack>Loading....</Stack>;

  const formatDate = ({ date }: { date: Date | undefined }) => {
    if (!date) return;
    const newDate = new Date(date);
    var year = newDate.getFullYear();
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    return year + "/" + month + "/" + day;
  };

  return (
    <Stack>
      <Stack alignItems={"center"} gap={4} width={400}>
        <Stack
          width={"100%"}
          boxShadow={"0 0 10px rgba(0, 0, 0, 0.1)"}
          padding={2}
          borderRadius={2}
          gap={2}
          alignItems={"center"}
        >
          <Stack width={"100%"}>Order histories</Stack>
          <Stack width={"100%"} gap={3}>
            {myOrders &&
              myOrders
                .sort(
                  (a, b) =>
                    new Date(b.createdAt ?? "").getTime() -
                    new Date(a.createdAt ?? "").getTime()
                )
                .map((item, index) => (
                  <Stack
                    width={"100%"}
                    key={item._id}
                    gap={2}
                    onClick={() => {
                      setFoods(item.foods);
                      setSelectedOrder(item._id);
                      if (item._id) {
                        setOrderId(item._id.slice(-4));
                      }
                    }}
                    sx={{
                      cursor: "pointer",
                      padding: 2,
                      borderRadius: 1,
                      ":hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                      },
                      backgroundColor:
                        selectedOrder === item._id
                          ? "rgba(0, 0, 0, 0.1)"
                          : undefined,
                    }}
                  >
                    <Stack
                      direction={"row"}
                      gap={2}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <State disabled={!item.deliveryStatus} />
                      <Stack
                        direction={"row"}
                        flexGrow={1}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Stack>
                          <Typography color={"text.primary"} fontSize={16}>
                            Order #{item._id && item._id.slice(-4)}
                          </Typography>
                          <Typography
                            fontSize={14}
                            color={
                              item.deliveryStatus ? "primary.main" : "blue"
                            }
                          >
                            {item.deliveryStatus ? "Success" : "Proccessing"}
                          </Typography>
                          <Typography>
                            {formatDate({ date: item.createdAt })}
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Divider
                      sx={{
                        borderColor: item.deliveryStatus
                          ? "primary.main"
                          : "blue",
                      }}
                    ></Divider>
                  </Stack>
                ))}
          </Stack>
        </Stack>
      </Stack>

      <Stack></Stack>
      <Stack></Stack>
    </Stack>
  );
};
