import React, {useRef, useState, useEffect} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import clsx from "clsx";
import "./index.scss";
import PersonInfo from "./PersonInfo";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const TeamInfo = () => {


    
    const [preview, setPerView] = useState(4);
    const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth});

    const setView = () => {
        if(window.innerWidth < 600) {
          setPerView(1);
        }
        else if(window.innerWidth < 800) {
          setPerView(2);
        }
        else if(window.innerWidth < 1080) {
          setPerView(3);
        }
        else {
          setPerView(4);
        }
    }
    
    function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        })
        setView();
    }

    useEffect(() => {

        AOS.init({duration: 1000});
        AOS.refresh();

        window.addEventListener('resize', handleResize);
        setView();
    });

    const style = {
      display: "flex",
      justifyContent: "center",
    }

    const dev1_desc = "";
    return (

        <div className="team-intro" id = "team">
            <div className="team-intro-header" data-aos="fade-up">
                <img src="/image/ourteam.png"/>
            </div>
            
            <div className="padding">
            <Swiper
              slidesPerView={preview}
              spaceBetween={30}
              pagination={{
                type: "progressbar",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              navigation={true}
              
            >
                <SwiperSlide style = {style}>
                <PersonInfo photo = "Juliman.png" name = "Hou Fanglin" title = "Project Manager" description = {dev1_desc}/>
                </SwiperSlide>
                <SwiperSlide style = {style}>
                <PersonInfo photo = "james.png" name = "James Berry" title = "Blockchain Developer" description = {dev1_desc}/>
                </SwiperSlide>
                <SwiperSlide style = {style}>
                <PersonInfo photo = "rieser.png" name = "Rieser Stern" title = "Frontend Developer" description = {dev1_desc}/>
                </SwiperSlide>
                <SwiperSlide style = {style}>
                <PersonInfo photo = "kundu.png" name = "Jatin Kundu" title = "Graphic Designer" description = {dev1_desc}/>
                </SwiperSlide>                
            </Swiper>
            </div>
        </div>
    );
};

export default TeamInfo;

