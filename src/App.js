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
        <Route path="Main" element={<Main />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
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
