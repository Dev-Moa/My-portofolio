import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const style = {
    container: `flex  justify-between items-center text-white  font-[poppins]`,
    ul: `flex gap-5 hidden md:flex `,
    ul_mobile: `md:hidden absolute top-12 right-20 bg-white rounded p-6 from-gray-900 to-gray-600 bg-gradient-to-t`,
    btn: `md:hidden block`,
    menu: `text-3xl  md:hidden`,
    grdtxt: `font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
  };
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className={style.container}>
      <h1 className={style.grdtxt}>Dev Moha</h1>

      <ul className={nav ? style.ul : style.ul_mobile}>
        <li>About</li>
        <li>Skills</li>
        <li>Education</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button onClick={handleClick} className={style.btn}>
        {nav ? (
          <IoMenu className={style.menu} />
        ) : (
          <IoMdClose className={style.menu} />
        )}
      </button>
    </div>
  );
}

export default Navbar;
