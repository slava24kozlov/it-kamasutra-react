import React from "react";
import style from "./Wrapper.module.scss";

const Wrapper = ({title, children}) => (
  <section className={style.main}>
    {title && <h1>{title}</h1>}
    {children}
  </section>
)

export default Wrapper;