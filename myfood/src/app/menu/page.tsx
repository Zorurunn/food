"use client";
import { Filter } from "@/components /Filter";
import { TopSection } from "./_component/TopSection";
import { Stack, TextField } from "@mui/material";
import { Card, CustomContainer } from "@/components ";
import { Category } from "./_component/Category";
import { SearchedValue } from "@/components /search/SearchedValue";
import { ButtonCategory } from "./_component/ButtonCategory";
import { ChangeEvent, useState } from "react";

const buttons = ["Main course", "Appetizers", "Beverage", "On Sale"];
export default function Dashboard() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSelectedOption(event.target.value);
  };
  return (
    <CustomContainer maxWidth="lg">
      <Stack gap={8}>
        <Stack
          direction={"row"}
          sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          width={"100%"}
          gap={2}
        >
          {buttons.map((item) => {
            return (
              <ButtonCategory
                key={item}
                title={item}
                selectedOption={selectedOption}
                handleOptionChange={handleOptionChange}
                setSelectedOption={setSelectedOption}
              />
            );
          })}
        </Stack>
        <Stack
          direction={"row"}
          sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          width={"100%"}
          gap={2}
        >
          {new Array(10).fill(0).map((_, index) => (
            <Card
              imgPath="/temporary/morning.jpg"
              title="Өглөөний хоол"
              price={4800}
              discountPercentage={40}
            />
          ))}
        </Stack>
      </Stack>
    </CustomContainer>
  );
}
