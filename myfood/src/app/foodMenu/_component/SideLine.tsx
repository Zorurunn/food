import { categoryType, selectCategoryTypes } from "@/common";
import { useData } from "@/components ";
import { Dropdown, MenuButton } from "@mui/base";
import { Delete, Edit, MoreVert } from "@mui/icons-material";
import { Backdrop, MenuItem, Stack, Typography } from "@mui/material";
import { ChangeEventHandler, Dispatch, SetStateAction, useState } from "react";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { styled } from "@mui/system";
import { CssTransition } from "@mui/base/Transitions";
import { PopupContext } from "@mui/base/Unstable_Popup";
import { EditCategory } from "./EditCategory";
import { Really } from "@/app/userProfile/_components/Really";
import { useConfirm } from "@/components /providers/ConfirmationProvider";

// const categories = ["breakfast", "soup", "main course", "desserts"];
export const SideLine = (props: selectCategoryTypes & categoryType) => {
  const { confirm } = useConfirm();
  const [openEditCategoryName, setOpenEditCategoryName] = useState(false);
  // const [really, setReally] = React.useState(false);
  const { name, _id, selectedCategory, setSelectedCategory } = props;
  const { deleteCategory } = useData();

  return (
    <>
      {/* EDIT CATEGORY NAME MODAL */}
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openEditCategoryName}
      >
        {openEditCategoryName && (
          <EditCategory
            name={name}
            _id={_id}
            setOpen={setOpenEditCategoryName}
          />
        )}
      </Backdrop>
      {/* DELETE CATEGORY REALLY */}
      <Backdrop
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        // open={really}
        open={false}
      >
        <Stack
          width={80}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ backgroundColor: "#fff", borderRadius: 2 }}
        >
          {/* <Really
            title={"Та устгахдаа итгэлтэй байна уу ?"}
          /> */}
        </Stack>
      </Backdrop>
      <Stack
        direction={"row"}
        border={"1px solid"}
        borderColor={
          selectedCategory?._id === _id ? "primary.main" : "text.secondary"
        }
        borderRadius={2}
        padding={1}
        alignItems={"center"}
        sx={{
          backgroundColor:
            selectedCategory?._id === _id ? "primary.main" : null,
          cursor: "pointer",
        }}
      >
        <Stack
          flexGrow={1}
          onClick={() => {
            setSelectedCategory({ _id, name });
          }}
        >
          <Typography
            color={selectedCategory?._id === _id ? "#fff" : "text.primary"}
          >
            {name}
          </Typography>
        </Stack>

        <Dropdown>
          <MenuButton>
            <MoreVert
              sx={{
                color: selectedCategory?._id === _id ? "#fff" : "text.primary",
              }}
              onClick={() => {}}
            />
          </MenuButton>
          <Menu>
            <Stack
              position={"absolute"}
              top={0}
              left={0}
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                border: "1px solid",
                borderColor: "text.primary",
              }}
              gap={1}
              paddingY={1}
            >
              <MenuItem
                onClick={() => {
                  setOpenEditCategoryName(true);
                }}
              >
                <Stack direction={"row"} gap={1} width={150}>
                  <Edit />
                  <Stack flexGrow={1}>Edit Name</Stack>
                </Stack>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  confirm("Та устгахдаа итгэлтэй байна уу ?", () =>
                    deleteCategory({ name, _id })
                  );
                }}
              >
                <Stack direction={"row"} gap={1} width={150} color={"red"}>
                  <Delete />
                  <Stack>Delete category</Stack>
                </Stack>
              </MenuItem>
            </Stack>
          </Menu>
        </Dropdown>
      </Stack>
    </>
  );
};
