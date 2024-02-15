import styles from "./CSS/colorSelect.module.css";
import "../App.css";

export default function Colors({
  add,
  newselect,
  colorcurrent,
  newwin,
  dwn,
  dwn1,
  dwn2,
  dwn3,
}) {
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdowncontent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <>
      <div className={`${styles.outershell} mx-auto`}>
        <span className={`d-flex ${styles.shellone}`}>
          <div className={`mx-auto mt-1`}>Bg-Color </div>
          <div className={`mx-auto`}>
            <div className={`${styles.picker} d-flex m-0`}>
              <div className={`mt-1 mx-auto ${styles.pickerin}`}>
                {colorcurrent}
              </div>
              <input
                type="color"
                id="exampleColorInput"
                className={`me-2 mt-1 mb-1 p-0 ${styles.colorpicker} `}
                value={colorcurrent}
                title="Choose your color"
                onChange={newselect}
              />
            </div>
          </div>
        </span>
        <div className={`${styles.outershelladd} m-auto d-flex`}>
          <div onClick={add} className={`${styles.button} mx-auto`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </div>
          <div onClick={newwin} className={`${styles.button} mx-auto`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
            </svg>
          </div>
          <div className={`dropdown`}>
            <button className={`dropbtn`}>Patterns</button>
            <div id="myDropdown" className={`dropdowncontent`}>
              <p onClick={dwn}>Radial</p>
              <hr className={`m-0`} />
              <p onClick={dwn1}>Repeat Radial</p>
              <hr className={`m-0`} />
              <p onClick={dwn2}>Conic</p>
              <hr className={`m-0`} />
              <p onClick={dwn3}>Repeat Conic</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div onClick={dwn} className={`${styles.button} mx-auto`}>
//   Download
// </div>
