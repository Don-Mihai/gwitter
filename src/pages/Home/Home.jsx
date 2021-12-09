import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ListIcon from "@mui/icons-material/List";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getAllPinPosts } from "../../redux/actions/posts";
import { getSearchText } from "../../redux/actions/search";

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

  const handleSearch = (event) => {
    dispatch(getSearchText(event.target.value));
  };

  return (
    <div className="wraper">
      <div className="aside">
        <nav className="nav">
          <Link className="nav__link btn" to="/">
            <HomeIcon className="nav__link-icon" />
            Главная
          </Link>
          <Link className="nav__link btn" to="/Bookmarks">
            <BookmarkBorderIcon className="nav__link-icon" />
            Закладки
          </Link>
          <Link className="nav__link btn" to="/Home">
            <PermIdentityIcon className="nav__link-icon" />
            Профиль
          </Link>
          <Link className="nav__link btn" to="/Home">
            <ListIcon className="nav__link-icon" />
            Подписки
          </Link>
        </nav>
        <button className="aside__tweet btn-reset btn">Гвитнуть</button>
      </div>
      <Outlet />
      <aside className="aside aside_right">
        <input type="text" className="aside__input" onChange={handleSearch} />
      </aside>
    </div>
  );
}

export default Home;
