import React from "react";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Post from "./Post";
import { getPosts } from "../../redux/actions/posts";

function Posts() {
  const [tweetText, setTweetText] = React.useState("");
  const user = useSelector((state) => state.user?.user);
  const posts = useSelector((state) => state.posts?.posts);
  const searchText = useSelector((state) => state.search?.text);

  const handleText = (event) => {
    setTweetText(event.target.value);
  };
  let availableText = 100 - tweetText.length;
  const dispatch = useDispatch();

  const onTweet = () => {
    axios
      .post(`http://localhost:3001/posts/`, {
        idUser: user.id,
        text: tweetText,
      })
      .then(() => {
        setTweetText("");
        return axios
          .get(`http://localhost:3001/posts?idUser=${user.id}`)
          .then((data) => dispatch(getPosts(data.data)));
      });
  };

  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Главная</span>
        </div>
      </header>
      <div className="tweet">
        <div className="tweet__wrap-author">
          <Avatar
            sx={{ width: 50, height: 50, bgcolor: "#f0ebf4", color: "#e64398" }}
          >
            {user?.firstName[0] + "" + user?.lastName[0]}
          </Avatar>
        </div>
        <div className="tweet__wrap-content">
          <form action="">
            <textarea
              className="tweet__input"
              placeholder="Что случилось?"
              value={tweetText}
              onChange={handleText}
            />
          </form>

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
              <button className="tweet__btn btn btn-reset" onClick={onTweet}>
                Гвитнуть
              </button>
            </div>
          </div>
        </div>
      </div>
      {posts &&
        posts
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return <Post key={item.id} text={item?.text} idPost={item.id} />;
          })}
    </main>
  );
}

export default Posts;
