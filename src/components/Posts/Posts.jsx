import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Tweet from "../Tweet/Tweet";

function Posts() {
  const posts = useSelector((state) => state.posts?.posts);
  const searchText = useSelector((state) => state.search?.text);

  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Главная</span>
        </div>
      </header>

      <Tweet />

      {posts &&
        posts
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <Post
                key={item.id}
                text={item?.text}
                idPost={item.id}
                urlImg={item?.urlImg}
              />
            );
          })}
    </main>
  );
}

export default Posts;
