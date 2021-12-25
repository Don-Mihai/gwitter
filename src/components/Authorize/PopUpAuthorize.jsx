import React from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { fetchCurUser } from "../../redux/actions/user";
import { useDispatch } from "react-redux";

function PopUpAuthorize({ handleToggle }) {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    sessionStorage.setItem("curLogin", data.login);
    dispatch(fetchCurUser(data.login));
    setIsLogIn(true);
  };
  return (
    <div className="popup">
      {isLogIn && <Navigate to="Home" />}
      <div className="overlay" onClick={handleToggle} />
      <div className="popup__wrap auth-wrap">
        <span className="popup__title">Войдите в учетную запись</span>
        <form
          action=""
          className="popup__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            className="popup__input"
            placeholder="Логин"
            {...register("login", {
              required: "this is a required",
              maxLength: {
                value: 20,
                message: "Max length is 20",
              },
              validate: async (value) => {
                const res = await axios
                  .get(`http://localhost:3001/users?login=${value}`)
                  .then(function (response) {
                    if (response.data.length === 0) {
                      return "Такого пользователя не существует";
                    } else {
                      return true;
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                return res;
              },
            })}
          />
          {errors.login && (
            <span className={"popup__errors-text"}>{errors.login.message}</span>
          )}
          <input
            type="password"
            className="popup__input"
            placeholder="Пароль"
            {...register("password", {
              required: "this is a required",
              minLength: {
                value: 8,
                message: "Min length is 8",
              },
              maxLength: {
                value: 20,
                message: "Max length is 20",
              },
              validate: async (value) => {
                const res = await axios
                  .get(`http://localhost:3001/users?password=${value}`)
                  .then(function (response) {
                    if (response.data.length === 0) {
                      return "Такого пользователя не существует";
                    } else {
                      return true;
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                return res;
              },
            })}
          />
          {errors.password && (
            <span className={"popup__errors-text"}>
              {errors.password.message}
            </span>
          )}
          <button className="popup__btn btn btn-reset" type="submit">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopUpAuthorize;
