import React from "react";
import Home from "./pages/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import BookmarkPosts from "./components/BookmarkPosts/BookmarkPosts";
import Main from "./pages/Main/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<Layout />}>
          <Route path="Home" element={<Posts />} />
          <Route path="Bookmarks" element={<BookmarkPosts />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

function Layout() {
  return <Home />;
}
