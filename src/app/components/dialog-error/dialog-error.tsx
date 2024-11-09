import style from "./dialog-error.module.css";

export default function DialogError() {
  return (
    <div role="dialog" className={style.dialog}>
      <div className={style.dialogContaineer}>
        <h2 className="title">
          Houver um <strong>Erro! </strong> 
          ao processar seu histórico
        </h2>

        <span className="text">
          Tente novamente mais tarde.
        </span>
      </div>
    </div>
  );
}
