import React from "react";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

function Post({ text = "" }) {
  const user = useSelector((state) => state.user.user);
  return (
    <article className="posts__post post">
      <div className="post__wrap-img">
        <Avatar sx={{ width: 50, height: 50, bgcolor: "#a1c3d1" }}>
          {user?.firstName[0] + "" + user?.lastName[0]}
        </Avatar>
      </div>
      <div className="post__text">
        <div className="post__wrap-user">
          <h4 className="post__user-name">
            {user.firstName + " " + user.lastName}
          </h4>
          <span className="post__user-id">{"@" + user.login}</span>
        </div>
        <div className="post__content">{text}</div>
        <div className="post__icons">i</div>
      </div>
    </article>
  );
}

export default Post;
