import React from "react";
import { Link } from "react-router-dom";
import "./PopUpAuthorize.scss";

function PopUpAuthorize({ handleToggle }) {
  return (
    <div className="popup">
      <div className="overlay" onClick={handleToggle} />
      <div className="popup__wrap auth-wrap">
        <span className="popup__title">Войдите в учетную запись</span>
        <form action="" className="popup__form">
          <input type="text" className="popup__input" placeholder="Имя" />
          <input type="text" className="popup__input" placeholder="Телефон" />
          <Link to="/Home" className="popup__btn btn popup__link">
            Войти
          </Link>
        </form>
      </div>
    </div>
  );
}

export default PopUpAuthorize;
