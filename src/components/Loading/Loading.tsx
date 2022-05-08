import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./Loading.scss";
import twitterIcon from "./../../image/icon-twitter.svg";
import discordIcon from "./../../image/icon-discord.svg";
import neftyblockIcon from "./../../image/icon-neftyblock.png";
import atomicIcon from "./../../image/icon-atomic.svg";

import ClearIcon from "@mui/icons-material/Clear";

interface Props {
  isloading?: any
}

export default function Loading({
  isloading
}: Props) {
  
  return (
    <div className={clsx(isloading ? "root" : "NoneDisplay", "container")}>
      <img src = "/image/loading.gif"/>
    </div>
  );
}
