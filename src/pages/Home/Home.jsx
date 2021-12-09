import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllPinPosts } from "../../redux/actions/posts";

function Home() {
  const user = useSelector((state) => state.user?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pinedPosts?idUser=${user.id}`)
      .then((data) => {
        console.log(data.data, "allPinPosts");
        dispatch(getAllPinPosts(data.data));
      });
  });

  return (
    <div className="wraper">
      <div className="aside">
        <nav className="nav">
          <Link className="nav__link btn" to="/">
            <HomeIcon className="nav__link-icon" />
            Home
          </Link>
          <Link className="nav__link btn" to="/Bookmarks">
            <BookmarkBorderIcon className="nav__link-icon" />
            Bookmarks
          </Link>
          <Link className="nav__link btn" to="/Home">
            <PermIdentityIcon className="nav__link-icon" />
            Profile
          </Link>
          <Link className="nav__link btn" to="/Home">
            <ListIcon className="nav__link-icon" />
            Subscriptions
          </Link>
        </nav>
        <button className="aside__tweet btn-reset btn">Tweet</button>
      </div>
      <Outlet />
      <aside className="aside aside_right">
        <input type="text" className="aside__input" />
      </aside>
    </div>
  );
}

export default Home;
