import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import Tweet from "../Tweet/Tweet";
import axios from "axios";
import BusidoPost from "./BusidoPost";

function Posts() {
  const posts = useSelector((state) => state.posts?.posts);
  const searchText = useSelector((state) => state.search?.text);
  const checkBusido = useSelector((state) => state.category?.checkBusido);
  const [busidoPosts, setBusidoPosts] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/busido`)
      .then((data) => setBusidoPosts(data.data));
  }, []);

  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Главная</span>
        </div>
      </header>

      <Tweet />
      {checkBusido &&
        busidoPosts &&
        busidoPosts
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <BusidoPost
                title={item.title}
                text={item.text}
                urlImg={item.urlImg}
              />
            );
          })}
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
