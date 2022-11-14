import React from "react";
import img from "../assets/img.png";
import { MdWavingHand } from "react-icons/md";
function Hero() {
  const style = {
    container: `flex justify-between items-center font-[poppins]`,
    cont: `flex flex-col my-8 `,
    flex: `flex gap-5 items-center`,
    mxd_img: `mt-12 w-[200px] md:w-[400px]`,
    txt: `text-xl md:text-6xl text-white font-semibold `,
    hand: `w-12 m-0 p-0 `,
    btn: `w-20 py-2 text- md:w-44 md:h-16 md:text-xl rounded -mb-12  bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
  };
  return (
    <div className={style.container}>
      <div>
        <div className={style.cont}>
          <div className={style.flex}>
            <h1 className={style.txt}>Hi</h1>
            <MdWavingHand className={style.txt} />
          </div>
          <h1 className={style.txt}>Front-End </h1>
          <h1 className={style.txt}>Developer</h1>
        </div>
        <button className={style.btn}>About Me </button>
      </div>
      <img src={img} alt="mxd img" className={style.mxd_img} />
    </div>
  );
}

export default Hero;
