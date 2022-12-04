import React from "react";
import Html from "../assets/Html 5 Icon.png";
import Css from "../assets/Css3 Icon.png";
import js from "../assets/Javascript Icon.png";
import react from "../assets/React Icon 2.png";
import git from "../assets/Git Icon.png";
import github from "../assets/Github Icon.png";
import sass from "../assets/Sass avatar Icon.png";
import typescript from "../assets/Typescript Icon.png";
import redux from "../assets/redux Icon.png";
import firebase from "../assets/firebase Icon.png";
import figma from "../assets/figma Icon.png";
import xd from "../assets/adobe xd Icon.png";
function Skills() {
  const style = {
    parent: ` flex flex-col my-12 light`,
    container: `grid grid-cols-3 md:grid-cols-4 `,
    txt: `mb-12 mt-4 text-l md:text-xl text-white font-normal leading-9`,
    grdtxt: `my-2 hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <div className={style.parent}>
      <h1 className={style.grdtxt}>Skills</h1>

      <p className={style.txt}>
        Here are some of the technology that i feel confident to work{" "}
      </p>
      <div className={style.container}>
        <img src={Html} alt="" />
        <img src={Css} alt="" />
        <img src={js} alt="" />
        <img src={react} alt="" />
        <img src={git} alt="" />
        <img src={github} alt="" />
        <img src={sass} alt="" />
        <img src={typescript} alt="" />
        <img src={redux} alt="" />
        <img src={firebase} alt="" />
        <img src={figma} alt="" />
        <img src={xd} alt="" />
      </div>
    </div>
  );
}

export default Skills;
