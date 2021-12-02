import React from "react";
import "./Authorize.scss";
import PopUpAuthorize from "../PopUpAuthorize/PopUpAuthorize";

function Authorize({ handleClickToggle }) {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="register">
      <img src="/ghost1.svg" alt="" height={60} />
      <h1 className="register__title">В курсе происходящего</h1>
      <h3 className="register__subtitle">Вход в Гвиттер</h3>
      <div className="register__btns">
        <button className="register__btn btn-reset btn" onClick={handleToggle}>
          Войдите
        </button>
        {toggle && <PopUpAuthorize handleToggle={handleToggle} />}
      </div>
      <p className="register__agree">
        Регистрируясь, вы соглашаетесь с&nbsp;
        <a href="https://twitter.com/ru/tos" target="_blank" rel="noreferrer">
          Условиями предоставления услуг
        </a>
        &nbsp;и Политикой конфиденциальности, а также с Политикой использования
        файлов cookie.
      </p>
      <p className="register__log-in">
        У вас нет учетной записи?
        <button className="btn-reset" onClick={handleClickToggle}>
          Зарегистрируйтесь
        </button>
      </p>
    </div>
  );
}

export default Authorize;
