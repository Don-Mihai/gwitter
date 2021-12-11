import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllPinPosts } from "../../redux/actions/posts";
import { Box, Modal } from "@mui/material";
import Tweet from "../../components/Tweet/Tweet";
import styled from "@emotion/styled";
import Aside from "../../components/Aside/Aside";

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

function Home() {
  const [open, setOpen] = React.useState(false);

  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pinedPosts?idUser=${user.id}`)
      .then((data) => {
        console.log(data.data, "allPinPosts");
        dispatch(getAllPinPosts(data.data));
      });
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="wraper">
      <div className="aside">
        <nav className="nav">
          <Link className="nav__link btn" to="Home">
            <HomeIcon className="nav__link-icon" />
            Главная
          </Link>
          <Link className="nav__link btn" to="/Bookmarks">
            <BookmarkBorderIcon className="nav__link-icon" />
            Закладки
          </Link>
          <Link className="nav__link btn" to="/User">
            <PermIdentityIcon className="nav__link-icon" />
            Профиль
          </Link>
          <Link className="nav__link btn" to="/Subscribes">
            <ListIcon className="nav__link-icon" />
            Подписки
          </Link>
        </nav>
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
      </div>
      <Outlet />
      <Aside />
    </div>
  );
}

export default Home;
