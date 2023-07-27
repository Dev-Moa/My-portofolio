import React from "react";

function Who() {
  const style = {
    container: `my-8 light `,
    txt: `text-l leading-9 md:text-xl text-white  mb-12 mt-4`,
    grdtxt: `my-2 hero text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <article className={style.container}>
      <h1 className={style.grdtxt}>Who we are ? </h1>
      <p className={style.txt}>
      Meet the Coding Champs - a team of skilled React developers. Our portfolio showcases our passion for building beautiful, responsive, and dynamic web applications. Join us as we take you through our projects and demonstrate how the Coding Champs are pushing the boundaries of web development.
        <a className="underline text-gray-300" href="#">
          Visit Link{" "}
        </a>{" "}
      </p>
    </article>
  );
}

export default Who;
