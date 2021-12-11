import React from "react";
import { Avatar } from "@mui/material";

function BusidoPost({ title, text, urlImg }) {
  return (
    <article className="posts__post post">
      <div className="post__wrap-img">
        <Avatar
          src={"/busido.jfif"}
          sx={{ width: 50, height: 50, bgcolor: "#f0ebf4", color: "#e64398" }}
        />
      </div>
      <div className="post__text">
        <div className="post__wrap-user">
          <h4 className="post__user-name">{title}</h4>
        </div>
        <div className="post__content">{text}</div>
        <img src={urlImg} alt="" className="post__img" />
        <div className="post__icons">i</div>
      </div>
    </article>
  );
}

export default BusidoPost;
