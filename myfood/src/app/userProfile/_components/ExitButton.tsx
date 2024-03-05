import { useAuth, useData } from "@/components ";
import { ExitToApp } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { useConfirm } from "@/components /providers/ConfirmationProvider";

export const ExitButton = () => {
  const { confirm } = useConfirm();
  const { signOut } = useAuth();
  const { setInCart } = useData();

  return (
    <Stack
      direction={"row"}
      width={"100%"}
      padding={2}
      gap={2}
      sx={{ backgroundColor: "primary.dark", cursor: "pointer" }}
      onClick={() => {
        confirm("Та системээс гарахдаа итгэлтэй байна уу?", () => {
          setInCart([]);
          signOut();
        });
      }}
    >
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={48}
        height={48}
        sx={{
          backgroundColor: "#fff",
          borderRadius: "100%",
          border: "1px solid",
          borderColor: "primary.dark",
        }}
      >
        <ExitToApp />
      </Stack>
      <Stack flexGrow={1} justifyContent={"center"}>
        Гарах
      </Stack>
    </Stack>
  );
};
