import React from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLogin } from "../../redux/actions/user";
import axios from "axios";

function Back({ regData }) {
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
    delete data.password2;
    axios.post(`http://localhost:3001/users`, { ...regData, ...data }).catch();
    dispatch(getLogin(data?.login));
    setIsLogIn(true);
  };
  return (
    <div className="popup__back">
      {isLogIn && <Navigate to="/home" />}
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form" onSubmit={handleSubmit(onSubmit)}>
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
          })}
        />
        {errors.password && (
          <span className={"popup__errors-text"}>
            {errors.password.message}
          </span>
        )}
        <input
          type="text"
          className="popup__input"
          placeholder="Повторите пароль"
          {...register("password2", {
            required: "this is a required",
            minLength: {
              value: 8,
              message: "Min length is 8",
            },
            maxLength: {
              value: 20,
              message: "Max length is 20",
            },
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
}

export default Back;
