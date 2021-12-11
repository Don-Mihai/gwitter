import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import BusidoPost from "../Posts/BusidoPost";

function Subscribes() {
  const searchText = useSelector((state) => state.search?.text);
  const checkBusido = useSelector((state) => state.category?.checkBusido);
  const [busidoPosts, setBusidoPosts] = React.useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/busido`)
      .then((data) => setBusidoPosts(data.data));
  }, []);
  return (
    <main className="posts">
      <header className="posts__header">
        <div className="posts__header-top">
          <span className="posts__header-title">Подписки</span>
        </div>
      </header>

      {checkBusido &&
        busidoPosts &&
        busidoPosts
          .filter((item) =>
            item.text.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((item) => {
            return (
              <BusidoPost
                title={item.title}
                text={item.text}
                urlImg={item.urlImg}
              />
            );
          })}
    </main>
  );
}

export default Subscribes;
