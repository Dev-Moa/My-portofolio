import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IoLogoPython } from "react-icons/io5";
import { SiTypescript, SiRedux, SiDjango } from "react-icons/si";
function Skills() {
  const style = {
    parent: ` flex flex-col my-12 light`,
    container: `grid grid-cols-3 gap-4 md:grid-cols-4 `,
    txt: `mb-12 mt-4 text-l md:text-xl text-white font-normal leading-9`,
    grdtxt: `my-2 hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
    tech: `text-8xl text-white`,
  };
  return (
    <div className={style.parent}>
      <h1 className={style.grdtxt}>Skills</h1>

      <p className={style.txt}>
        Here are some of the technology that we feel confident to work{" "}
      </p>
      <div className={style.container}>
        <AiFillHtml5 className={style.tech} />
        <DiCss3 className={style.tech} />
        <SiJavascript className={style.tech} />
        <FaReact className={style.tech} />
        <SiFirebase className={style.tech} />
        <SiTypescript className={style.tech} />
        <SiRedux className={style.tech} />
      </div>
    </div>
  );
}

export default Skills;
