import React from "react";
import Authorize from "../../components/Authorize/Authorize.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Register from "../../components/Register/Register.jsx";
import "../../styles/components/Main.scss";
import { motion } from "framer-motion";

export default function Main() {
  const [authToggle, setAuthToggle] = React.useState(false);

  const handleClickToggle = () => {
    setAuthToggle(!authToggle);
  };
  return (
    <div className="main">
      <div className="main__wrap">
        <div className="main__left">
          <div className="main__clouds">
            <div className="main__cloud">Пойдешь гулять?</div>
            <div className="main__cloud">Нет</div>
            <div className="main__cloud">Почему!?</div>
            <div className="main__cloud">Деньги машина есть?</div>
          </div>
          <div className="main__images">
            <img src="/ghost1.svg" alt="" height={500} />
            <motion.img
              whileTap={{ rotate: -5, translateX: -30 }}
              src="/ghost2.svg"
              alt=""
              height={500}
            />
          </div>
        </div>
        {authToggle ? (
          <Authorize handleClickToggle={handleClickToggle} />
        ) : (
          <Register handleClickToggle={handleClickToggle} />
        )}
      </div>
      <Footer />
    </div>
  );
}
