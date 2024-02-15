import styles from "./CSS/bodyone.module.css";

export default function BodyOne({
  color,
  listvaluee,
  properties,
  listvalnum,
  post,
  cursorx,
  cursory,
  Activee,
  move,
  deact,
}) {
  function postt() {
    let d = document.getElementById("real").offsetWidth;
    let k = document.getElementById("real").offsetHeight;
    let ox = document.getElementById("real").offsetLeft;
    let oy = document.getElementById("real").offsetTop;
    post(d, k, ox, oy);
  }

  return (
    <>
      <div
        className={`container-fluid ${styles.outerdivv} p-0 mt-4`}
        id="colorful"
      >
        <div
          className={`container-fluid ${styles.outerdiv} `}
          style={{ backgroundColor: color, width: "95%", height: "35rem" }}
          onClick={() => {
            postt();
          }}
          id="real"
          onMouseMove={move}
          onMouseLeave={deact}
        >
          <div
            className={`container-fluid ${styles.microdiv}`}
            style={{
              backgroundImage: properties,
            }}
          >
            <div className={`m-0 p-0 ${styles.microdivin}`}>
              {listvalnum.map((itm) => (
                <div
                  className={`${styles.minidiv}`}
                  key={itm}
                  id={itm}
                  style={{
                    position: "absolute",
                    backgroundColor: listvaluee[itm - 1],
                    top: cursorx[itm - 1],
                    left: cursory[itm - 1],
                  }}
                  onMouseDown={Activee}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
