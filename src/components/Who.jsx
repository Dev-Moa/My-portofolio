import React from "react";

function Who() {
  const style = {
    container: `my-12 font-[poppins]  `,
    txt: `text-l leading-9 md:text-xl text-white font-normal `,
    grdtxt: `my-2 font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
  };
  return (
    <article className={style.container}>
      <h1 className={style.grdtxt}>Who am i ? </h1>
      <p className={style.txt}>
        My name is Mohamed shariif , im web developer from somalia , a country
        where tech is not popular but hardworking and loyalty is . i have been
        in the industry not that long but 2 years and i feel that i have been
        more than that becouse of the passionate and love that i have for this
        industry. if you like to hear my story read this article{" "}
        <a className="underline text-gray-300" href="#">
          Visit Link{" "}
        </a>{" "}
      </p>
    </article>
  );
}

export default Who;
