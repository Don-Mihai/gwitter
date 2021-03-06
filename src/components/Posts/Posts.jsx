import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Tweet from "../Tweet/Tweet";
import { fetchAllPosts } from "../../redux/actions/posts";
import { fetchAllUsers } from "../../redux/actions/user";

const Posts = () => {
  const posts = useSelector((state) => state.posts?.posts);
  const isLoaded = useSelector((state) => state.posts?.isLoaded);
  const searchText = useSelector((state) => state.search?.text);
  const checksId = useSelector((state) => state.subscribes?.checksId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchAllPosts());
  }, []);

  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Главная</span>
        </div>
      </header>

      <Tweet />

      {isLoaded &&
        posts
          .filter((item) => {
            for (const element of checksId) {
              if (item.idUser === element) {
                return false;
              }
            }
            return true;
          })
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <Post
                key={item.id}
                text={item?.text}
                idPost={item.id}
                idUser={item.idUser}
                urlImg={item?.urlImg}
              />
            );
          })}
    </main>
  );
};

export default Posts;
