import React from "react";
import style from "./Wrapper.module.scss";

type PropsType = {
  title: string
  children: typeof React.Component
}

const Wrapper = ({title, children}: PropsType) => (
  <section className={style.main}>
    {title && <h1>{title}</h1>}
    {children}
  </section>
)

export default Wrapper;