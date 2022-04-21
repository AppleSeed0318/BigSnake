import React, {useRef, useState, useEffect} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import clsx from "clsx";
import "./index.scss";
import PersonInfo from "./PersonInfo";

const TeamInfo = () => {

    const ref = useRef<HTMLDivElement>();
    const [direct, setDirect] = useState("");
    const [scrollpoint, setScrollpoint] = useState(0);

    const scroll = (scrollOffset: number) => {
        if (ref.current !== undefined) {
            ref.current.scrollLeft += scrollOffset;
            setScrollpoint(ref.current.scrollLeft);
        }
    };

    useEffect(() => {
        if (ref.current !== undefined) {
            const scrollwidth = ref.current.scrollWidth - ref.current?.clientWidth;
            console.log("scrollwidth = ", scrollwidth);
            if(scrollwidth == 0) {
                setDirect("");
            }
            else if (scrollpoint === 0) {
                setDirect("right");
            } else if (scrollpoint >= scrollwidth) {
                setDirect("left");
            } else {
                setDirect("both");
            }
        }
    });

    const dev1_desc = "";
    return (

        <div className="team-intro" id = "team">
            <div className="team-intro-header">
                <img src="/image/ourteam.png"/>
            </div>
            <div>
                <div className={clsx("scroll-btn scroll-btn-left", {["active"]: direct === "left" || direct === "both"})} onClick={() => scroll(-100)}><ArrowBackIosNewIcon/></div>
                <div className={clsx("scroll-btn scroll-btn-right", {["active"]: direct === "right" || direct === "both"})} onClick={() => scroll(100)}><ArrowForwardIosIcon/></div>
                {/*<div className = "scroll-btn scroll-btn-left" onClick={() => scroll(-100)}><ArrowBackIosNewIcon/></div>*/}
                {/*<div className = "scroll-btn scroll-btn-right" onClick={() => scroll(100)}><ArrowForwardIosIcon/></div>*/}
            </div>
            <div className="padding">
            <div className="team-intro-contents" ref={ref as React.RefObject<HTMLDivElement>}>
                
                <PersonInfo photo = "Juliman.png" name = "Hou Fanglin" title = "Project Manager" description = {dev1_desc}/>
                <PersonInfo photo = "james.png" name = "James Berry" title = "Senior Blockchain Engineer" description = {dev1_desc}/>
                <PersonInfo photo = "rieser.png" name = "Rieser Stern" title = "Frontend Developer" description = {dev1_desc}/>
                <PersonInfo photo = "kundu.png" name = "Jatin Kundu" title = "Graphic Designer" description = {dev1_desc}/>
                
            </div>
            </div>
        </div>
    );
};

export default TeamInfo;

