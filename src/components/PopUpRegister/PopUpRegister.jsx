import React from "react";
import "./PopUpRegister.scss";
import Front from "./Front";
import Back from "./Back";
import PropTypes from "prop-types";

function PopUpRegister({ handleToggle }) {
  const [rotate, setRotate] = React.useState(false);
  const [regData, setRegData] = React.useState();
  return (
    <div className={"popup"}>
      <div className="overlay" onClick={handleToggle} />
      <div className={`popup__wrap ${rotate ? "popup__rotate" : ""}`}>
        <Front rotate={rotate} setRotate={setRotate} setRegData={setRegData} />
        <Back setRegData={setRegData} regData={regData} />
      </div>
    </div>
  );
}

PopUpRegister.propTypes = {
  handleToggle: PropTypes.func,
};
export default PopUpRegister;
