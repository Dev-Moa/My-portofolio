import React from "react";
import Html from "../assets/Html 5 Icon.png";
import Css from "../assets/Css3 Icon.png";
import js from "../assets/Javascript Icon.png";
import react from "../assets/React Icon 2.png";
function Skills() {
  const style = {
    container: `flex `,
    txt: `text-l md:text-xl text-white font-normal  leading-3 `,
    grdtxt: `my-2 font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <div>
      <h1>Skills</h1>
      <div className={style.container}>
        <img src={Html} alt="" />
        <img src={Css} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
      </div>
    </div>
  );
}

export default Skills;
