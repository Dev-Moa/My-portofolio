import React from "react";
import img from "../assets/img.png";
import { MdWavingHand } from "react-icons/md";
function Hero() {
  const style = {
    container: `md:flex justify-between items-center font-[poppins]`,
    cont: `flex flex-col mt-8 text-center md:text-left `,
    flex: `flex gap-5 items-center`,
    mxd_img: `mt-12 w-[500px]`,
    txt: `my-4 text-sm md:text-2xl text-white font-[poppins] `,
    txt_bold: `relative text-3xl   md:text-3xl text-white font-semibold `,
    hand: `w-12  `,
    btn: `text-white min-w-20 p-2 mx-2 text-xl rounded -mb-12  bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
  };
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <h1 className={style.txt_bold}>
          Hello {<MdWavingHand className="absolute top-0 left-24" />}{" "}
        </h1>
        <h1 className={style.txt_bold}>I'm Mohamed </h1>
        <p className={style.txt}>
          From completely uncivilized environment in technology , im inspired to
          be developer and I feel happy that my hardworking had worked.
        </p>
        <div>
          <button className={style.btn}>
            <a href="https://github.com/Dev-Moa" target="_blank">
              Github
            </a>{" "}
          </button>
          <button className={style.btn}>
            <a
              href="https://www.linkedin.com/in/dev-moha-a11932250/"
              target="_blank"
            >
              Linkedin
            </a>{" "}
          </button>
        </div>
      </div>
      <img src={img} alt="mxd img" className={style.mxd_img} />
    </div>
  );
}

export default Hero;
