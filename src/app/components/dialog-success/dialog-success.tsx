import style from "./dialog-success.module.css";

export default function DialogSuccess() {
  return (
    <div role="dialog" className={style.dialog}>
      <div className={style.dialogContaineer}>
        <h2 className="title">
          Recebemos seu extrato com <strong>sucesso!</strong>
        </h2>

        <span className="text">
          Agora é só aguardar que em breve enviaremos por e-mail o dashboard
          gerado unicamente para você.
        </span>
      </div>
    </div>
  );
}
