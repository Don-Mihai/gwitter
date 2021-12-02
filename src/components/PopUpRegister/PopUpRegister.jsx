import React from "react";
import "./PopUpRegister.scss";
import { TextField } from "@mui/material";

function PopUpRegister({ handleToggle }) {
  return (
    <div className="popup">
      <div className="overlay" onClick={handleToggle} />
      <div className="popup__wrap">
        <span className="popup__title">Создайте учетную запись</span>
        <form action="" className="popup__form">
          <input type="text" className="popup__input" placeholder="Имя" />
          <input type="text" className="popup__input" placeholder="Телефон" />
          <span className="popup__subtitle">Дата рождения</span>
          <p className="popup__text">
            Эта информация не будет общедоступной. Подтвердите свой возраст,
            даже если эта учетная запись предназначена для компании, домашнего
            животного и т. д.
          </p>
          <TextField className="popup__date" type="date" fullWidth />
          <button className="popup__btn btn-reset btn">Регистрация</button>
        </form>
      </div>
    </div>
  );
}

export default PopUpRegister;
