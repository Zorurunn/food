import { Button, Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Stars";
import { Card, CustomContainer } from "@/components ";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type CategoryProps = {
  title: string;
};
export const Category = (props: CategoryProps) => {
  const { title } = props;
  return (
    <CustomContainer maxWidth="lg">
      <Stack gap={3}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} alignItems={"center"} gap={1}>
            <StarIcon sx={{ color: "primary.main" }} />
            <Typography fontWeight={800} fontSize={18}>
              {title}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button sx={{ textTransform: "none" }}>Бүгдийг харах</Button>
            <ChevronRightIcon sx={{ color: "primary.main" }} />
          </Stack>
        </Stack>
        <Stack
          sx={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}
          width={"100%"}
          gap={2}
        >
          {new Array(4).fill(0).map((_, index) => (
            <Card
              imgPath="/temporary/morning.jpg"
              title="Өглөөний хоол"
              price={4800}
              discountPercentage={20}
            />
          ))}
        </Stack>
      </Stack>
    </CustomContainer>
  );
};
