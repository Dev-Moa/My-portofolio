import React from "react";

function Education() {
  const style = {
    txt: `text-l mt-4 mb-12 light md:text-xl text-white font-normal leading-9 font-[poppins]`,
    grdtxt: `hero font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <div className="my-8">
      <h1 className={style.grdtxt}>Education</h1>
      <p className={style.txt}>
        We are computer science  student and we are studying from the best
        technology university in somalia (Jamhuriya university)
      </p>
    </div>
  );
}

export default Education;
