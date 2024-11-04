import style from "./loading.module.css";

export default function loading() {
  return <div role="loading" className={style.loading}>
    <div className={style.bar}></div>
  </div>;
}
