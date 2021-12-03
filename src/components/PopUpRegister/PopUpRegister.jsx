import React from "react";
import "./PopUpRegister.scss";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function PopUpRegister({ handleToggle }) {
  const [register, setRegister] = React.useState({});
  const [rotate, setRotate] = React.useState(false);
  const handleValue = (event) => {
    setRegister((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    console.log(register);
  };
  const onRotate = (event) => {
    event.preventDefault();
    setRotate(!rotate);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={"popup"}>
      <div className="overlay" onClick={handleToggle} />
      <div className={`popup__wrap ${rotate ? "popup__rotate" : ""}`}>
        <div className={"popup__front"}>
          <span className="popup__title">Создайте учетную запись</span>
          <form action="" className="popup__form">
            <input
              type="text"
              className="popup__input"
              name="name"
              placeholder="Имя"
              onChange={handleValue}
            />
            <input
              type="text"
              className="popup__input"
              name="surName"
              placeholder="Фамилия"
              onChange={handleValue}
            />
            <span className="popup__subtitle">Дата рождения</span>
            <p className="popup__text">
              Эта информация не будет общедоступной. Подтвердите свой возраст,
              даже если эта учетная запись предназначена для компании, домашнего
              животного и т. д.
            </p>
            <TextField
              className="popup__date"
              type="date"
              name="date"
              onChange={handleValue}
              fullWidth
            />
            <button className="popup__btn btn-reset btn" onClick={onRotate}>
              Далее
            </button>
          </form>
        </div>
        <div className="popup__back">
          <span className="popup__title">Создайте учетную запись</span>
          <form action="" className="popup__form">
            <input
              type="text"
              className="popup__input"
              name="login"
              placeholder="Логин"
              onChange={handleValue}
            />
            <input
              type="text"
              className="popup__input"
              name="password"
              placeholder="Пароль"
              onChange={handleValue}
            />
            <input
              type="text"
              className="popup__input"
              name="password2"
              placeholder="Повторите пароль"
              onChange={handleValue}
            />
            <button className="popup__btn btn-reset btn" onClick={onSubmit}>
              Регистрация
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

PopUpRegister.propTypes = {
  handleToggle: PropTypes.func,
};
export default PopUpRegister;
