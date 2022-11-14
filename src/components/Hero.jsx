import React from "react";
import img from "../assets/img.png";
import { MdWavingHand } from "react-icons/md";
function Hero() {
  const style = {
    container: `md:flex justify-between items-center font-[poppins]`,
    cont: `flex flex-col mt-8 text-center md:text-left `,
    flex: `flex gap-5 items-center`,
    mxd_img: `mt-12 w-[500px]`,
    txt: `my-4 text-l  md:text-3xl text-white font-normal `,
    txt_bold: `text-3xl   md:text-3xl text-white font-semibold `,
    hand: `w-12  `,
    btn: `w-20 py-2 mx-2 text-xl rounded -mb-12  bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
    btnn: `w-24 py-2 mx-2  text-xl rounded -mb-12  bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
  };
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <h1 className={style.txt_bold}>Hello 👋</h1>
        <h1 className={style.txt_bold}>I'm Mohamed </h1>
        <p className={style.txt}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fuga
          exercitationem distinctio esse ullam magni.
        </p>
        <div>
          <button className={style.btn}>Github </button>
          <button className={style.btnn}>Linkedin </button>
        </div>
      </div>
      <img src={img} alt="mxd img" className={style.mxd_img} />
    </div>
  );
}

export default Hero;
