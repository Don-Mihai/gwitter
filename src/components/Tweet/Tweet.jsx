import React, { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Box, CircularProgress, IconButton, Popper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchAllPosts } from "../../redux/actions/posts";
import { fetchCurUser } from "../../redux/actions/user";

function Tweet() {
  const [tweetText, setTweetText] = React.useState("");
  const [tweetImg, setTweetImg] = React.useState("");
  const user = useSelector((state) => state.user?.curUser);
  const isLoaded = useSelector((state) => state.user?.isLoaded);

  useEffect(() => {
    dispatch(fetchCurUser(null));
  }, []);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const handleUrlImg = (event) => {
    setTweetImg(event.target.value);
  };
  const handleText = (event) => {
    setTweetText(event.target.value);
  };

  let availableText = 300 - tweetText.length;
  const dispatch = useDispatch();

  const onTweet = () => {
    axios
      .post(`/posts/`, {
        idUser: user.id,
        text: tweetText,
        urlImg: tweetImg,
      })
      .then(() => {
        setTweetText("");
        return dispatch(fetchAllPosts());
      });
    setAnchorEl(null);
  };

  return (
    <div className="tweet">
      <div className="tweet__wrap-author">
        <Avatar
          sx={{ width: 50, height: 50, bgcolor: "#f0ebf4", color: "#e64398" }}
        >
          {isLoaded && user?.firstName[0] + "" + user?.lastName[0]}
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
            <IconButton
              aria-describedby={id}
              aria-label="Example"
              onClick={handleClick}
              sx={{ color: "#333333" }}
            >
              <ImageIcon className="tweet__icon" />
            </IconButton>

            <Popper id={id} open={open} anchorEl={anchorEl}>
              <Box className={"tweet__tool-box"}>
                <h3 className="tweet__img-subtitle">
                  Введите сслыку картинки:
                </h3>
                <input
                  type="text"
                  className="aside__input"
                  onChange={handleUrlImg}
                />
              </Box>
            </Popper>
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
                value={tweetText.length / 3}
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
  );
}

export default Tweet;
