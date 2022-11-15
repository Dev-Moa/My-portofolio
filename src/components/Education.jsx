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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iste
        sunt unde consectetur cum nobis dignissimos dicta odit quia neque
        consequatur cupiditate, natus quae fugiat nulla ad ipsa laboriosam
        saepe, totam nam omnis facere! Et quia quos laudantium ullam inventore
        provident accusantium delectus culpa exercitationem fugit, nihil fugiat
        blanditiis alias!
      </p>
    </div>
  );
}

export default Education;
