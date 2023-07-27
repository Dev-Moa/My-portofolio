import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
function Projects() {
  const style = {
    container: `grid grid-cols-3 gap-5 my-8 light `,
    txt: `text-l md:text-xl text-white font-normal leading-9`,
    grdtxt: `my-4 hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
    card: `max-w-sm min-h-[200px]  p-2 border border-white  rounded`,
  };
  return (
    <div>
      <h1 className={style.grdtxt}>Images </h1>
      <p className={style.grdtxt}> </p>
      <div className={style.container}>
        <div className={style.card}>
          <a href=""></a>
          <img src={img1} alt="" />
        </div>
        <div className={style.card}>
        <img src={img2} alt="" />
        </div>
        <div className={style.card}>
        <img src={img3} alt="" />
        </div>
        <div className={style.card}>
        <img src={img4} alt="" />
        </div>
        <div className={style.card}>
        <img src={img2} alt="" />
        </div>
        <div className={style.card}>
        <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
