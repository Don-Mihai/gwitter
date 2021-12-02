import React from "react";
import "./Register.scss";
import PopUpRegister from "../PopUpRegister/PopUpRegister";

function Register({ handleClickToggle }) {
  const [toggle, setToggle] = React.useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="register">
      <img src="/ghost1.svg" alt="" height={60} />
      <h1 className="register__title">В курсе происходящего</h1>
      <h3 className="register__subtitle">
        Присоединяйтесь к Гвиттеру прямо сейчас!
      </h3>
      <div className="register__btns">
        <button className="register__btn btn-reset btn" onClick={handleToggle}>
          Зарегистрируйтесь
        </button>
        {toggle && <PopUpRegister handleToggle={handleToggle} />}
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
        Уже зарегистрированы?
        <button className="btn-reset" onClick={handleClickToggle}>
          Войдите
        </button>
      </p>
    </div>
  );
}

export default Register;
