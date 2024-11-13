'use client';

import style from "./box.module.css";

export default function Box({children, title}: any) {
    return <div className={style.box}>
    <span className="text">{title}</span>

    <span className={style.value}>
      {children}
    </span>
  </div>
}