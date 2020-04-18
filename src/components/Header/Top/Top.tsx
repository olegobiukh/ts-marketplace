import "./index.scss";

import { IoIosHeartEmpty, IoIosShuffle } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import LogoSVG from "../../../assets/images/header/logo.svg";

import React from "react";

import Search from "./Search";

function Top() {

  return (
    <div className={`top`}>
        <img src={LogoSVG} alt="logo" />
        <Search />
        <div className={`top__right`}>
          <IoIosHeartEmpty className={`top__icon`} />
          <AiOutlineUser className={`top__icon`} />
          <IoIosShuffle className={`top__icon`} />
        </div>
      </div>
  );
}

export default Top;
