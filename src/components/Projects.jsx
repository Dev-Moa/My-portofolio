import React from "react";

function Projects() {
  const style = {
    container: `grid grid-cols-3 gap-5 my-8 light `,
    txt: `text-l md:text-xl text-white font-normal leading-9`,
    grdtxt: `my-4 hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
    card: `max-w-sm min-h-[200px]  p-2 bg-white  rounded`,
  };
  return (
    <div>
      <h1 className={style.grdtxt}>Projects</h1>
      <div className={style.container}>
        <div className={style.card}>
          <a href=""></a>
          <img alt="" />
        </div>
        <div className={style.card}>
          <img src="" alt="" />
        </div>
        <div className={style.card}>
          <img src="" alt="" />
        </div>
        <div className={style.card}>
          <img src="" alt="" />
        </div>
        <div className={style.card}>
          <img src="" alt="" />
        </div>
        <div className={style.card}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
