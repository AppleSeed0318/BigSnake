import React, {useState, useEffect} from "react";
import "./Dashboard.css";
import AppBar from "../../components/Header"
import TeamIntro from "../../components/TeamIntro"
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import Loading from "../../components/Loading/Loading";

import backImg1 from './../../image/mainbg/header.jpg';
import backImg2 from './../../image/mainbg/main.jpg';
import backImg3 from './../../image/mainbg/footer.png';

import Roadmap from "../../components/Roadmap";
import Mystery from "../../components/Mystery";
import '../../fonts/Snake in the Boot.ttf';
import clsx from "clsx";

export const Dashboard = () => {

  const [mobileMenuStatus, setMobileMenuStatus] = useState(false);
  const handleMobileMenuClick = () => {
    setMobileMenuStatus(true);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuStatus(false);
  };
  const [isloading, setloading] = useState(true);
  
  useEffect(() => {
    setTimeout(function(){
      setloading(false);
    }, 7000);
  });

  

  return (
    <div className="container">
      <Loading isloading = {isloading}/>
      <MobileMenu
        className="mobileMenuRoot"
        show={mobileMenuStatus}
        onClose={handleMobileMenuClose}
      />
      <div className={clsx(mobileMenuStatus||isloading ? "NoneDisplay" : "container")}>
        <div className="container-header">
          <div className="header-contains">
            <AppBar menuClick={handleMobileMenuClick} />
            <Main/>
          </div>
          <div className="backImgContainer">
            <img src={backImg1} className="backImg1"/>
          </div>
        </div>
        <Mystery/>
        <div className="container-main">
          <div className="main-contains">
            <Roadmap/>
            <TeamIntro/>
          </div>
          <div className="backImgContainer">
            <img src={backImg2} className="backImg2"/>
          </div>
        </div>
        
        <div className="container-footer">
          <div className="footer-contains">
            <Footer/>
          </div>
          <div className="backImgContainer">
            <img src={backImg3} className="backImg3"/>
          </div>
        </div>
      </div>
    </div>
    
  );
};
