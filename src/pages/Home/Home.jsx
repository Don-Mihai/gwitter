import React from "react";
import { Outlet } from "react-router-dom";
import Aside from "../../components/Aside/Aside";
import Nav from "../../components/Nav/Nav";

function Home() {
  return (
    <div className="wraper">
      <div className="aside">
        <Nav />
      </div>
      <Outlet />
      <Aside />
    </div>
  );
}

export default Home;
