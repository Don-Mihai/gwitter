import React from "react";
import { Avatar, Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeCheckId, setCheckId } from "../../redux/actions/subscribes";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Subscriber({ firstName, lastName, login, id }) {
  const isLoadedUsers = useSelector((state) => state.user?.isLoadedUsers);
  const dispatch = useDispatch();
  const handleCheck = (event) => {
    event.target.checked
      ? dispatch(removeCheckId(id))
      : dispatch(setCheckId(id));
  };
  return (
    <div className="aside__subscribe-item">
      <Avatar
        sx={{
          width: 50,
          height: 50,
          bgcolor: "#f0ebf4",
          color: "#e64398",
        }}
      >
        {isLoadedUsers && firstName[0] + "" + lastName[0]}
      </Avatar>
      <div className="aside__subscribe-wrap">
        <div className="aside__subscribe-fio">
          {isLoadedUsers && firstName + " " + lastName}
        </div>
        <div className="aside__subscribe-login">@ {isLoadedUsers && login}</div>
      </div>

      <Switch
        {...label}
        color="secondary"
        defaultChecked
        onChange={handleCheck}
      />
    </div>
  );
}

export default Subscriber;
