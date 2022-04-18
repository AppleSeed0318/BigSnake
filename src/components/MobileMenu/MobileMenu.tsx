import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./MobileMenu.scss";
import twitterIcon from "./../../image/icon-twitter.svg";
import discordIcon from "./../../image/icon-discord.svg";
import telegramIcon from "./../../image/icon-telegram.svg";
import instagramIcon from "./../../image/icon-instagram.svg";

import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  children?: React.ReactNode;
  className?: any;
  show: boolean;
  onClose?: any;
}

export default function MobileMenu({
  children,
  className,
  show,
  onClose,
}: Props) {
  const [showStatus, setShowStatus] = useState(show);
  useEffect(() => {
    setShowStatus(show);
  }, [show]);

  const handleHeader = (index: number) => {
    switch (index) {
      case 1:
        onClose();
        break;
      case 2:
        onClose();
        break;
      case 3:
        onClose();
        break;
      case 4:
        onClose();
        break;
      case 5:
        onClose();
        break;
    }
  };
  return (
    <div className={clsx(showStatus ? "root" : "NoneDisplay", className)}>
      <ClearIcon className="cancelIcon" onClick={onClose} />
      <div className="headerLetter" onClick={() => handleHeader(1)}>
        <a href = "#">HOME</a>
      </div>
      <div className="headerLetter" onClick={() => handleHeader(2)}>
        <a href = "#about">ABOUT</a>
      </div>
      <div className="headerLetter" onClick={() => handleHeader(3)}>
        <a href = "#roadmap">ROADMAP</a>
      </div>
      <div className="headerLetter" onClick={() => handleHeader(4)}>
        <a href = "https://big-snakes.gitbook.io/big-snakes/">WHITEPAPER</a>
      </div>
      <div className="headerLetter" onClick={() => handleHeader(5)}>
        <a href = "#team">TEAM</a>
      </div>
      <div className="socialLinkContainer">
        <a href = "#"><img src={twitterIcon} className="socialIcon" /></a>
        <a href = "https://discord.gg/hEHz59ur9D"><img src={discordIcon} className="socialIcon" /></a>
        <a href = "#"><img src={telegramIcon} className="socialIcon" /></a>
        <a href = "#"><img src={instagramIcon} className="socialIcon" /></a>
      </div>
      <div className="playBtn">Play</div>
    </div>
  );
}
