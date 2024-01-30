import { Stack, SvgIconTypeMap, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

type FilterProps = {
  title: string;
  description: string;
  icon: string;
};
export const Filter = (props: FilterProps) => {
  const { title, description, icon } = props;
  return (
    <Stack>
      <Stack
        position={"relative"}
        paddingTop={"56.25%"}
        border={"1px solid transparent"}
        borderRadius={2}
        overflow={"hidden"}
        padding={"10px 18px"}
        boxShadow={
          "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
        }
        gap={2}
      >
        <Stack>
          {icon === "book" ? (
            <ImportContactsIcon sx={{ color: "primary.main" }} />
          ) : null}
          {icon === "time" ? (
            <AccessTimeIcon sx={{ color: "primary.main" }} />
          ) : null}
          {icon === "healthy" ? (
            <RiceBowlIcon sx={{ color: "primary.main" }} />
          ) : null}
        </Stack>
        <Stack>
          <Typography fontSize={15} color={"text.primary"}>
            {title}
          </Typography>
          <Typography fontSize={12} color={"text.secondary"}>
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
