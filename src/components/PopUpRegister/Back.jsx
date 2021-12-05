import React from "react";
import { useForm } from "react-hook-form";

function Back(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div className="popup__back">
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
