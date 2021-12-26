import React from "react";
import Home from "./pages/Home/Home.jsx";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts/Posts";
import BookmarkPosts from "./components/BookmarkPosts/BookmarkPosts";
import Main from "./pages/Main/Main";
import Subscribes from "./components/Subscribes/Subscribes";
import Profile from "./components/Profile/Profile";
import { useSelector } from "react-redux";

function App() {
  const curUser = useSelector((state) => state.user.curUser);
  return (
    <div className="App">
      <Routes>
        {Object.keys(curUser).length === 0 && (
          <Route path="/" element={<Main />} />
        )}
        {Object.keys(curUser).length !== 0 && (
          <Route element={<Layout />}>
            <Route path="Home" element={<Posts />} />
            <Route path="Bookmarks" element={<BookmarkPosts />} />
            <Route path="Subscribes" element={<Subscribes />} />
            <Route path="Profile" element={<Profile />} />
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;

function Layout() {
  return <Home />;
}
