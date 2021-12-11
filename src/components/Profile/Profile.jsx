import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

function Profile() {
  const user = useSelector((state) => state.user?.user);
  return (
    <main className="profile posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">
            {user.firstName + " " + user.lastName}
          </span>
        </div>
        <div className="profile__bg">
          <Avatar
            className={"profile__avatar"}
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#f0ebf4",
              color: "#e64398",
              fontSize: 50,
              position: "absolute",
              left: 15,
              bottom: -50,
              border: "3px solid #000",
            }}
          >
            {user?.firstName[0] + "" + user?.lastName[0]}
          </Avatar>
        </div>
      </header>
    </main>
  );
}

export default Profile;
