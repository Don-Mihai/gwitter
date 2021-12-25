import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post";
import { fetchAllUsers } from "../../redux/actions/user";
import { fetchAllPosts } from "../../redux/actions/posts";

function Subscribes() {
  const searchText = useSelector((state) => state.search?.text);
  const posts = useSelector((state) => state.posts?.posts);
  const isLoaded = useSelector((state) => state.posts?.isLoaded);
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
          <span className="posts__header-title">Подписки</span>
        </div>
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
      </header>
    </main>
  );
}

export default Subscribes;
