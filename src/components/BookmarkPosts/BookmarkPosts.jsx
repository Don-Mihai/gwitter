import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post";
import axios from "axios";
import { getAllUsers, getCurUser } from "../../redux/actions/user";
import { getAllPinPosts } from "../../redux/actions/posts";

function BookmarkPosts() {
  const pinPosts = useSelector((state) => state.posts?.pinPosts);
  const isLoadedPinPosts = useSelector(
    (state) => state.posts?.isLoadedPinPosts
  );
  const searchText = useSelector((state) => state.search?.text);

  const curUser = useSelector((state) => state.user?.curUser);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/users?login=${sessionStorage.getItem("curLogin")}`)
      .then((data) => {
        dispatch(getCurUser(...data.data));
      })
      .then(() => {
        axios.get(`/Users`).then((data) => {
          dispatch(getAllUsers(data?.data));
        });
      });
  }, []);
  useEffect(() => {
    axios.get(`/pinedPosts?idUser=${curUser.id}`).then((data) => {
      dispatch(getAllPinPosts(data.data));
    });
  }, [curUser]);
  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Закладки</span>
        </div>
      </header>
      {isLoadedPinPosts &&
        pinPosts
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

export default BookmarkPosts;
