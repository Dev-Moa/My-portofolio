import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
function Navbar() {
  const style = {
    container: `flex mb-12 justify-between items-center text-white  `,
    ul: ` light flex gap-5 hidden md:flex text-xl`,
    ul_mobile: `light md:hidden absolute top-12 right-20 z-10 bg-white rounded p-6 from-gray-900 to-gray-600 bg-gradient-to-t`,
    btn: `md:hidden block`,
    menu: `text-3xl  md:hidden`,
    grdtxt: `font-semibold hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-r from-[#F80505] to-[#FF7B36]`,
    li: `hover:bg-gray-400 hover:p-1 rounded`,
  };
  const [nav, setNav] = useState(true);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className={style.container}>
      <h1 className={style.grdtxt}>Dev Moha</h1>

      <ul className={nav ? style.ul : style.ul_mobile}>
        <Link to="about">
          <li className={style.li}>About</li>
        </Link>
        <Link to="skills">
          <li className={style.li}>Skills</li>
        </Link>

        <Link to="education">
          <li className={style.li}>Education</li>
        </Link>
        <Link to="projects">
          <li className={style.li}>Projects</li>
        </Link>
        <Link to="contact">
          <li className={style.li}>Contact</li>
        </Link>
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
