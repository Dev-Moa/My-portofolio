import React from "react";

function Contact() {
  const style = {
    container: `light flex flex-col gap-3 light`,
    txt: `  text-l md:text-xl text-white light leading-9`,
    grdtxt: `hero my-2 font-semibold text-transparent text-2xl md:text-4xl bg-clip-text bg-gradient-to-t from-[#FF7B36] to-[#F80505] font-[poppins]`,
    btn: `min-w-24  p-2 my-4 rounded bg-gradient-to-l from-[#FF7B36] to-[#F80505]  text-white`,
    input: `border border-white rounded`,
  };
  return (
    <div className={style.container}>
      <h1 className={style.grdtxt}>Contact us </h1>

      <input className={style.input} type="text" placeholder="Name" />

      <input className={style.input} type="email" placeholder="Email" />

      <textarea
        className={style.input}
        placeholder="Write me message"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button className={style.btn}>Submit</button>
    </div>
  );
}

export default Contact;
