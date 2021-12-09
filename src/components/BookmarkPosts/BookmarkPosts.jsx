import React from "react";
import { useSelector } from "react-redux";
import BookmarkPost from "./BookmarkPost";

function BookmarkPosts() {
  const pinPosts = useSelector((state) => state.posts.pinPosts);
  const searchText = useSelector((state) => state.search?.text);
  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Закладки</span>
        </div>
      </header>
      {pinPosts &&
        pinPosts
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <BookmarkPost
                key={item.id}
                text={item?.text}
                idPinPost={item.id}
              />
            );
          })}
    </main>
  );
}

export default BookmarkPosts;
