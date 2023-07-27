import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import logo from "../assets/logo.png";

function Navbar() {
  const style = {
    container: `flex mb-12 justify-between items-center text-white  `,
    ul: ` light flex gap-5 hidden md:flex text-xl`,
    ul_mobile: `light md:hidden absolute top-12 right-20 z-10 bg-white rounded p-6 from-gray-900 to-gray-600 bg-gradient-to-t`,
    btn: `md:hidden block`,
    menu: `text-3xl  md:hidden`,
    grdtxt: `font-semibold hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
    li: `hover:bg-gray-400 hover:p-1 rounded`,
    tech: `text-3xl text-white flex flex-col md:flex-row fixed top-10 right-5 bg-gray-800 p-2 gap-4 rounded`,
  };
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className={style.container}>
      <div>
      <img className="w-16" src={logo} alt="" />
      <p>coding Champs</p>
      </div>
      <div className={style.tech}>
        {/* facebook */}
        <a
          target="_blank"
          href="https://www.facebook.com/"
        >
          <AiFillFacebook />
        </a>
        {/* youtube */}
        <a
          target="_blank"
          href="https://www.youtube.com/"
        >
          <BsYoutube />
        </a>
        {/* github */}
        <a target="_blank" href="https://github.com">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
