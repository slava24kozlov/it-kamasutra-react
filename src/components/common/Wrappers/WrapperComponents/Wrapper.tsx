import React from "react";
import style from "./Wrapper.module.scss";

type PropsType = {
  title: string
  children: React.ReactNode
}

const Wrapper: React.FC<PropsType> = ({title, children}): JSX.Element => (
  <section className={style.main}>
    {title && <h1>{title}</h1>}
    {children}
  </section>
);

export default Wrapper;