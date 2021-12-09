import React from "react";
import { useSelector } from "react-redux";
import BookmarkPost from "./BookmarkPost";

function BookmarkPosts() {
  const pinPosts = useSelector((state) => state.posts.pinPosts);
  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Bookmark</span>
        </div>
      </header>
      {pinPosts &&
        pinPosts.map((item) => {
          return (
            <BookmarkPost key={item.id} text={item?.text} idPinPost={item.id} />
          );
        })}
    </main>
  );
}

export default BookmarkPosts;
