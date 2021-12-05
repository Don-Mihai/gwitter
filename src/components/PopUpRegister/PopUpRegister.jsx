import React from "react";
import "./PopUpRegister.scss";
import Front from "./Front";
import PropTypes from "prop-types";
import Back from "./Back";

function PopUpRegister({ handleToggle }) {
  const [rotate, setRotate] = React.useState(false);
  return (
    <div className={"popup"}>
      <div className="overlay" onClick={handleToggle} />
      <div className={`popup__wrap ${rotate ? "popup__rotate" : ""}`}>
        <Front rotate={rotate} setRotate={setRotate} />
        <Back />
      </div>
    </div>
  );
}

PopUpRegister.propTypes = {
  handleToggle: PropTypes.func,
};
export default PopUpRegister;
