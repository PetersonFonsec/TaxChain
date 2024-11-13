"use client";

import style from "./list.module.css";

export default function List({ title, list }: any) {
  return (
    <div className={style.list + " container"}>
      <span className="text">{title}</span>

      <ul>
        {list && Object.keys(list).map((field: any, index: any) => (
          <li key={index}>
            {field} <strong>{list[field].toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
