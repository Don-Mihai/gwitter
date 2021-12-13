import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, IconButton, Popper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import PushPinIcon from "@mui/icons-material/PushPin";
import { deletePost, pinPost } from "../../redux/actions/posts";
import CommentIcon from "@mui/icons-material/Comment";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

function Post({ text = "", idPost, urlImg, idUser }) {
  const users = useSelector((state) => state.user?.users);
  const curUser = useSelector((state) => state.user?.curUser);
  const isLoadedUsers = useSelector((state) => state.user?.isLoadedUsers);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handlePin = () => {
    dispatch(pinPost(idPost));
  };
  const handleDelete = () => {
    curUser.id === idUser
      ? dispatch(deletePost(idPost))
      : alert(
          "Вы пытаетесь удалить чужой пост! Скрытие постов чужих пользователей еще не реализованно, но вы можете убрать пользователя из подписок."
        );
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <article className="posts__post post">
      <div className="post__wrap-img">
        <Avatar
          sx={{ width: 50, height: 50, bgcolor: "#f0ebf4", color: "#e64398" }}
        >
          {isLoadedUsers &&
            users.find((item) => item.id === idUser).firstName[0] +
              "" +
              users.find((item) => item.id === idUser).lastName[0]}
        </Avatar>
      </div>
      <div className="post__text">
        <div className="post__wrap-user">
          <h4 className="post__user-name">
            {isLoadedUsers &&
              users.find((item) => item.id === idUser).firstName +
                " " +
                users.find((item) => item.id === idUser).lastName}
          </h4>
          <span className="post__user-id">
            {"@" + users.find((item) => item.id === idUser).login}
          </span>
          <IconButton
            aria-describedby={id}
            aria-label="Example"
            onClick={handleClick}
            sx={{ color: "#333333" }}
          >
            <SettingsIcon />
          </IconButton>
          <Popper id={id} open={open} anchorEl={anchorEl}>
            <Box className={"post__tool-box"}>
              <button
                className="post__tool-item btn-reset"
                onClick={handleDelete}
              >
                <DeleteIcon />
                <div>удалить</div>
              </button>
              <button className="post__tool-item btn-reset" onClick={handlePin}>
                <PushPinIcon />
                <div>прикрепить в закладки</div>
              </button>
            </Box>
          </Popper>
        </div>
        <div className="post__content">{text}</div>
        <img src={urlImg} alt="" className="post__img" />
        <div className="post__icons">
          <IconButton sx={{ color: "#888" }}>
            <CommentIcon />
          </IconButton>
          <IconButton sx={{ color: "#888" }}>
            <KeyboardReturnIcon />
          </IconButton>
          <IconButton sx={{ color: "#888" }}>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton sx={{ color: "#888" }}>
            <IosShareIcon />
          </IconButton>
        </div>
      </div>
    </article>
  );
}

export default Post;
