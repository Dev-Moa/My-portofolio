import React from "react";
import img from "../assets/pic.png";
import logo from "../assets/logo.png";
import { MdWavingHand } from "react-icons/md";
function Hero() {
  const style = {
    container: `md:flex justify-between items-center `,
    cont: `flex flex-col mt-8 text-center md:text-left `,
    flex: `flex gap-5 items-center`,
    mxd_img: `mt-12 w-[500px]`,
    txt: `my-4  text-lg md:text-2xl text-white light `,
    txt_bold: `relative text-3xl hero   md:text-3xl text-white font-semibold `,
    hand: `w-12  `,
    btn: `text-white min-w-20 p-2 ml-2 text-xl normal rounded -mb-22  bg-gradient-to-t from-[#F80505] to-[#FF7B36]`,
  };
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <h1 className={style.txt_bold}>
          Hello{" "}
          {<MdWavingHand className="absolute top-0 md:left-24 right-32 " />}{" "}
        </h1>
        <h1 className={style.txt_bold}>We are The Coding Champions </h1>
        <p className={style.txt}>
        Meet the Coding Champs - a team of skilled React developers. Our portfolio showcases our passion for building beautiful, responsive, and dynamic web applications. Join us as we take you through our projects and demonstrate how the Coding Champs are pushing the boundaries of web development.
        </p>
        <div>
          <button className={style.btn}>
            <a href="https://github.com" target="_blank">
              Github
            </a>{" "}
          </button>
          <button className={style.btn}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
            >
              Linkedin
            </a>{" "}
          </button>
        </div>
      </div>
      <div className={style.mxd_img}>
        <img src={logo} alt="logo img"  />
      </div>
    </div>
  );
}

export default Hero;
