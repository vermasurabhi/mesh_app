import styles from "./CSS/GetText.module.css";

export default function GetText({
  textdisplay,
  text,
  onClicktext,
  clickstatus,
}) {
  return (
    <>
      <div className={`row mt-3 m-0`}>
        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-6 m-0 p-0">
          <div className={`${styles.button} mx-auto`} onClick={textdisplay}>
            Get Code
          </div>
        </div>
        <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-6 m-0 p-0 d-flex">
          <div className={`${styles.textbox}`}>
            <div className={`${styles.txt}`}>{text}</div>
          </div>
          <div className={`${styles.copy}`} onClick={onClicktext} id="copy">
            {clickstatus}
          </div>
        </div>
      </div>
    </>
  );
}
