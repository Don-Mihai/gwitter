import React from "react";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Front = React.memo(({ setRotate, rotate, setRegData }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    setRegData(data);
    setRotate(!rotate);
  };
  const MemodTextField = React.memo(TextField);
  return (
    <div className={"popup__front"}>
      <span className="popup__title">Создайте учетную запись</span>
      <form action="" className="popup__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="popup__input"
          placeholder="Имя"
          {...register("firstName", {
            required: "это обязательное поле",
            maxLength: {
              value: 20,
              message: "максимальная длина - 20",
            },
          })}
        />
        {errors.firstName && (
          <span className={"popup__errors-text"}>
            {errors.firstName.message}
          </span>
        )}
        <input
          type="text"
          className="popup__input"
          placeholder="Фамилия"
          {...register("lastName", {
            required: "это обязательное поле",
            maxLength: {
              value: 20,
              message: "максимальная длина - 20",
            },
          })}
        />
        {errors.lastName && (
          <span className={"popup__errors-text"}>
            {errors.lastName.message}
          </span>
        )}
        <span className="popup__subtitle">Дата рождения</span>
        <p className="popup__text">
          Эта информация не будет общедоступной. Подтвердите свой возраст, даже
          если эта учетная запись предназначена для компании, домашнего
          животного и т. д.
        </p>
        <MemodTextField
          className="popup__date"
          type="date"
          fullWidth
          {...register("date", {
            required: "это обязательное поле",
          })}
        />
        {errors.date && (
          <span className={"popup__errors-text"}>{errors.date.message}</span>
        )}
        <button className="popup__btn btn-reset btn" type="submit">
          Далее
        </button>
      </form>
    </div>
  );
});

export default Front;
