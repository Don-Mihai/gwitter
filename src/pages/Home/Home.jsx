import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import ListIcon from "@mui/icons-material/List";
import Avatar from "@mui/material/Avatar";
import { Box, CircularProgress } from "@mui/material";

function Home() {
  const [tweetText, setTweetText] = React.useState("");
  const handleText = (event) => {
    setTweetText(event.target.value);
  };
  let availableText = 100 - tweetText.length;
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

      <main className="posts">
        <header className="posts__header">
          <div className="posts__header-top">
            <span className="posts__header-title">Home</span>
          </div>
        </header>
        <div className="tweet">
          <div className="tweet__wrap-author">
            <Avatar src="/avatar1.jpg" sx={{ width: 50, height: 50 }} />
          </div>
          <div className="tweet__wrap-content">
            <textarea
              className="tweet__input"
              placeholder="What`is happening?"
              onChange={handleText}
            />
            <div className="tweet__bottom">
              <div className="tweet__icons">
                <ImageIcon className="tweet__icon" />
                <InsertEmoticonIcon className="tweet__icon" />
              </div>
              <div className="tweet__wrap-btn">
                <Box
                  sx={{
                    position: "relative",
                    display: "inline-flex",
                    color: "#fff",
                  }}
                >
                  <CircularProgress
                    value={tweetText.length}
                    variant="determinate"
                    sx={{ color: availableText > 0 ? "#a1c3d1" : "red" }}
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {tweetText && availableText}
                  </Box>
                </Box>
                <button className="tweet__btn btn btn-reset">Tweet</button>
              </div>
            </div>
          </div>
        </div>
        <article className="posts__post post">
          <div className="post__wrap-img">
            <Avatar src="/avatar1.jpg" sx={{ width: 50, height: 50 }} />
          </div>
          <div className="post__text">
            <div className="post__wrap-user">
              <h4 className="post__user-name">Elon Musk</h4>
              <span className="post__user-id">@elonmusk</span>
            </div>
            <div className="post__content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusantium aliquam autem distinctio dolores ipsum itaque
              laboriosam modi, molestias, mollitia quia quibusdam, sapiente
              tempore vel. Aliquam beatae blanditiis consectetur delectus
              dignissimos doloremque id iure magni nesciunt, nisi omnis possimus
              totam voluptate. Consequuntur debitis, eaque error molestias nobis
              obcaecati provident quidem veniam!
            </div>
            <div className="post__icons">i</div>
          </div>
        </article>
      </main>
      <aside className="aside aside_right">
        <input type="text" className="aside__input" />
      </aside>
    </div>
  );
}

export default Home;
