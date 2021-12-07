import React, { useEffect } from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";
import Posts from "../../components/Posts/Posts";
import axios from "axios";
import { getUser } from "../../redux/actions/user";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const login = useSelector((state) => state?.user.login);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`http://localhost:3001/users?login=${login}`)
      .then((data) => {
        dispatch(getUser(...data.data));
        console.log(...data.data, "получили пользователя");
      })
      .catch();
  }, []);
  return (
    <div className="wraper">
      <div className="aside">
        <nav className="nav">
          <Link className="nav__link btn" to="/Home">
            <HomeIcon className="nav__link-icon" />
            Home
          </Link>
          <Link className="nav__link btn" to="/Home">
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
      <Posts />
      <aside className="aside aside_right">
        <input type="text" className="aside__input" />
      </aside>
    </div>
  );
}

export default Home;
