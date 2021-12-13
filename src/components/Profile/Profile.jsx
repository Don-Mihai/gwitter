import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Modal } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import axios from "axios";
import { getCurUser } from "../../redux/actions/user";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.2);
  -webkit-tap-highlight-color: transparent;
`;

function Profile() {
  const curUser = useSelector((state) => state.user?.curUser);
  const isLoaded = useSelector((state) => state.user?.isLoaded);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = (data) => {
    //редактирую данные на сервере и после этого получаю обратно данные с сервера и обновляю их и локально
    axios
      .put(`/users/${curUser.id}`, {
        ...curUser,
        ...data,
      })
      .then(() => {
        return axios.get(`/users?login=${curUser.login}`).then((data) => {
          dispatch(getCurUser(...data.data));
        });
      });
    setOpen(false);
  };

  useEffect(() => {
    axios
      .get(`/users?login=${sessionStorage.getItem("curLogin")}`)
      .then((data) => {
        dispatch(getCurUser(...data.data));
      });
  }, []);

  return (
    <main className="profile posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">
            {curUser.firstName + " " + curUser.lastName}
          </span>
        </div>
        <div className="profile__bg">
          <Avatar
            className={"profile__avatar"}
            sx={{
              width: 100,
              height: 100,
              bgcolor: "#f0ebf4",
              color: "#e64398",
              fontSize: 50,
              position: "absolute",
              left: 15,
              bottom: -50,
              border: "3px solid #000",
            }}
          >
            {isLoaded && curUser.firstName[0] + "" + curUser.lastName[0]}
          </Avatar>
        </div>
      </header>
      <div className="profile__wrap">
        <h3 className="profile__user-name">
          {curUser.firstName + " " + curUser.lastName}
        </h3>
        <h4 className="profile__login">@ {curUser.login}</h4>
        <div className="profile__date-wrap">
          <CalendarTodayIcon />
          <h4 className="profile__date">Родился {curUser.date}</h4>
        </div>
        <button className="profile__btn btn btn-reset" onClick={handleOpen}>
          Редактировать профиль
        </button>
        <Modal open={open} onClose={handleClose} BackdropComponent={Backdrop}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 600,
              bgcolor: "#000",
              borderRadius: "20px",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div className="profile__pupup-title popup__title">
              Измените ваши личные данные
            </div>
            <form
              action=""
              className="popup__form"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <button className="popup__btn btn-reset btn" type="submit">
                Редактировать
              </button>
            </form>
          </Box>
        </Modal>
      </div>
    </main>
  );
}

export default Profile;
