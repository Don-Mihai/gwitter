import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, IconButton, Popper } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

import { deletePinPost } from "../../redux/actions/posts";

function BookmarkPost({ text = "", idPinPost }) {
  const user = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleDelete = () => {
    dispatch(deletePinPost(idPinPost));
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  return (
    <article className="posts__post post">
      <div className="post__wrap-img">
        <Avatar
          sx={{ width: 50, height: 50, bgcolor: "#f0ebf4", color: "#e64398" }}
        >
          {user?.firstName[0] + "" + user?.lastName[0]}
        </Avatar>
      </div>
      <div className="post__text">
        <div className="post__wrap-user">
          <h4 className="post__user-name">
            {user.firstName + " " + user.lastName}
          </h4>
          <span className="post__user-id">{"@" + user.login}</span>
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
                <div>delete</div>
              </button>
            </Box>
          </Popper>
        </div>
        <div className="post__content">{text}</div>
        <div className="post__icons">i</div>
      </div>
    </article>
  );
}

export default BookmarkPost;
