import React from "react";

function Education() {
  const style = {
    txt: `text-l md:text-xl text-white font-normal leading-9 font-[poppins]`,
    grdtxt: `my-2 font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <div>
      <h1 className={style.grdtxt}>Education</h1>
      <p className={style.txt}>
        I'm computer science graduate student and i graduated from the best
        technology university in somalia (Jamhuriya university)
      </p>
    </div>
  );
}

export default Education;
