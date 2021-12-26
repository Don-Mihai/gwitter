import React from "react";
import { Box, Modal } from "@mui/material";
import Tweet from "../Tweet/Tweet";
import styled from "@emotion/styled";
import NavItem from "./NavItem";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-tap-highlight-color: transparent;
`;

const Nav = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <nav className="nav">
      <NavItem routeLink={"Home"} title={"Главная"}>
        <HomeIcon className="nav__link-icon" />
      </NavItem>
      <NavItem routeLink={"Bookmarks"} title={"Закладки"}>
        <BookmarkBorderIcon className="nav__link-icon" />
      </NavItem>
      <NavItem routeLink={"Profile"} title={"Профиль"}>
        <PermIdentityIcon className="nav__link-icon" />
      </NavItem>
      <NavItem routeLink={"Subscribes"} title={"Подписки"}>
        <ListIcon className="nav__link-icon" />
      </NavItem>
      <button className="aside__tweet btn-reset btn" onClick={handleOpen}>
        Гвитнуть
      </button>
      <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "#000",
            borderRadius: "20px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Tweet />
        </Box>
      </Modal>
    </nav>
  );
};

export default Nav;
