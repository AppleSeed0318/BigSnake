import React from "react";
import "./index.scss";
import ListIcon from "@mui/icons-material/List";

interface Props {
  menuClick?: any;
}

const AppBar = ({ menuClick }: Props) => {
  return (
    <div className="main-header">
      <div className="button-bar">
        <div className="logo">
          <img src="/image/LogoBS.png" />
        </div>
        <ul className="headerButtons">
          <li>
            <a href = "#">HOME</a>
          </li>
          <li>
            <a href = "#about">ABOUT</a>
          </li>
          <li>
            <a href = "#roadmap">ROADMAP</a>
          </li>
          <li>
            <a href = "https://big-snakes.gitbook.io/big-snakes/">WHITEPAPER</a>
          </li>
          <li>
            <a href = "#team">TEAM</a>
          </li>
        </ul>
      </div>
      <div className="social-btns">
        <ul>
          <li>
            <a href="#">
              <img src="/image/icon-twitter.svg" />
            </a>
          </li>
          <li>
            <a href="https://discord.gg/hEHz59ur9D">
              <img src="/image/icon-discord.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image/icon-telegram.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/image/icon-instagram.svg" />
            </a>
          </li>
          <li className="btn-play">
            <p>PLAY</p>
          </li>
        </ul>
      </div>
      <ListIcon className="menuIcon" onClick={menuClick} />
    </div>
  );
};

export default AppBar;
