import React from "react";
import { Avatar, Switch } from "@mui/material";
import { getSearchText } from "../../redux/actions/search";
import { useDispatch } from "react-redux";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Aside() {
  const dispatch = useDispatch();
  const handleCheckBusido = (event) => {
    console.log(event.target.checked, "event");
  };

  const handleSearch = (event) => {
    dispatch(getSearchText(event.target.value));
  };
  return (
    <aside className="aside aside_right">
      <input type="text" className="aside__input" onChange={handleSearch} />
      <div className="aside__subscribes">
        <h3 className="aside__subscribes-title">Подписки</h3>
        <div className="aside__subscribe-item">
          <Avatar
            src={"/busido.jfif"}
            sx={{
              width: 50,
              height: 50,
              bgcolor: "#f0ebf4",
              color: "#e64398",
            }}
          />
          <div className="aside__subscribe-category">Busido</div>
          <Switch
            {...label}
            defaultChecked
            color="secondary"
            onChange={handleCheckBusido}
          />
        </div>
      </div>
    </aside>
  );
}

export default Aside;
