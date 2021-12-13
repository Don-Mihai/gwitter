import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "./Post";
import Tweet from "../Tweet/Tweet";
import axios from "axios";
import { getPosts } from "../../redux/actions/posts";
import { getAllUsers } from "../../redux/actions/user";

function Posts() {
  const posts = useSelector((state) => state.posts?.posts);
  const isLoaded = useSelector((state) => state.posts?.isLoaded);
  const searchText = useSelector((state) => state.search?.text);
  const checksId = useSelector((state) => state.subscribes?.checksId);

  const dispatch = useDispatch();
  useEffect(() => {
    axios.get(`/Users`).then((data) => {
      dispatch(getAllUsers(data?.data));
      return axios.get(`/posts`).then((data) => dispatch(getPosts(data?.data)));
    });
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
}

export default Posts;
