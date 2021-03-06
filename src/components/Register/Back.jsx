import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCurUser } from "../../redux/actions/user";
import axios from "axios";

const Back = React.memo(({ regData }) => {
  const [isLogIn, setIsLogIn] = React.useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
  });
  const password = watch("password");

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    delete data.password2;
    sessionStorage.setItem("curLogin", data.login);
    axios
      .post(`/users`, { ...regData, ...data })
      .then(() => dispatch(fetchCurUser(null)));
    setIsLogIn(true);
  };
  return (
    <div className="popup__back">
      {isLogIn && <Navigate to="Home" />}
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="login"
          type="text"
          className="popup__input"
          placeholder="Логин"
          {...register("login", {
            required: "это обязательное поле",
            maxLength: {
              value: 20,
              message: "максимальная длина - 20",
            },
            validate: async (value) => {
              const res = await axios
                .get(`/users?login=${value}`)
                .then(function (response) {
                  if (response.data.length === 0) {
                    return true;
                  } else {
                    return "Такой пользователь уже существует";
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
          name="password"
          type="password"
          className="popup__input"
          placeholder="Пароль"
          {...register("password", {
            required: "это обязательное поле",
            minLength: {
              value: 8,
              message: "минимальная длина - 8",
            },
            maxLength: {
              value: 20,
              message: "максимальная длина - 20",
            },
          })}
        />
        {errors.password && (
          <span className={"popup__errors-text"}>
            {errors.password.message}
          </span>
        )}
        <input
          name="password2"
          type="password"
          className="popup__input"
          placeholder="Повторите пароль"
          {...register("password2", {
            required: "это обязательное поле",
            validate: (value) => value === password || "пароли не совпадают",
          })}
        />
        {errors.password2 && (
          <span className={"popup__errors-text"}>
            {errors.password2.message}
          </span>
        )}
        <button className="popup__btn btn-reset btn" type="submit">
          Регистрация
        </button>
      </form>
    </div>
  );
});

export default Back;
