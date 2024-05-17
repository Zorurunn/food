"use client";
import { Filter } from "@/components /Filter";
import { TopSection } from "./_component/TopSection";
import { Stack } from "@mui/material";
import { CustomContainer, useData } from "@/components ";
import { Category } from "./_component/Category";

export function Dashboard() {
  const { categories, foods } = useData();
  return (
    <Stack gap={"120px"} marginBottom={"120px"}>
      <TopSection />

      <CustomContainer maxWidth="lg">
        <Stack gap={"120px"}>
          <Stack
            sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
            width={"100%"}
            gap={2}
          >
            <Filter
              icon="book"
              title="Check delivery status"
              description="If you want to check delivery status click here"
              href="/order/orderHistory"
            />
            <Filter
              icon="time"
              title="Speed delivery"
              description="If you want to check delivery status click here"
              href="/order/orderHistory"
            />
            <Filter
              icon="healthy"
              title="Healthy foods"
              description="If you want to check delivery status click here"
            />
            <Filter
              icon="book"
              title="Variable food menu"
              description="If you want to check delivery status click here"
              href="/menu"
            />
          </Stack>
          <Stack gap={3}>
            <Category isDiscount={true} name="Discounted" _id="discount" />
            {categories &&
              categories.map((item) => {
                return <Category key={item._id} {...item} />;
              })}
          </Stack>
        </Stack>
      </CustomContainer>
    </Stack>
  );
}
