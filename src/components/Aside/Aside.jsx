import React from "react";
import { getSearchText } from "../../redux/actions/search";
import { useDispatch, useSelector } from "react-redux";
import Subscriber from "./Subscriber";

const Aside = () => {
  const users = useSelector((state) => state.user?.users);
  const isLoadedUsers = useSelector((state) => state.user?.isLoadedUsers);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(getSearchText(event.target.value));
  };
  return (
    <aside className="aside aside_right">
      <input
        className="aside__input"
        type="text"
        placeholder={"Поиск..."}
        onChange={handleSearch}
      />
      <div className="aside__subscribes">
        <h3 className="aside__subscribes-title">Подписки</h3>
        {isLoadedUsers &&
          users &&
          users.map((item) => {
            return (
              <Subscriber
                key={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                login={item.login}
                id={item.id}
              />
            );
          })}
      </div>
      <div className="aside__subscribes">
        <h3 className="aside__subscribes-title">
          Здесь могла бы быть ваша реклама!
        </h3>
      </div>
    </aside>
  );
};

export default Aside;
