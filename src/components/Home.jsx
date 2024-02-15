import styles from "./CSS/Home.module.css";
import Colors from "./colorSelect";
import { useState } from "react";
import BodyOne from "./bodyone";
import GetText from "./GetText";
import ListItem from "./ListItem";

let m = "";
let pattern = "radial";
let mouse = false;
let act = "";
let dwidth = "",
  dd = "";
let kheight = "";
let kk = "";
let syntax = "";
export default function Home() {
  let [listvaluee, updatedvaluee] = useState([]);
  let [listvalnum, updatednum] = useState([]);
  let [colorcurrent, colorafter] = useState("#031149");
  let [properties, upproperties] = useState();
  let [cursorx, upcursorx] = useState([]);
  let [cursory, upcursory] = useState([]);
  let [text, uptext] = useState("");
  let [clickstatus, updateclick] = useState("copy");

  function transo() {
    m = "";
    let currentlist = [...listvaluee];
    if (pattern === "radial") {
      for (let i = 0; i < currentlist.length; i++) {
        m =
          m +
          "radial-gradient(at " +
          Math.round((cursory[i] / (dd - 30)) * 100) +
          "% " +
          Math.round((cursorx[i] / (kk - 30)) * 100) +
          "%, " +
          listvaluee[i] +
          ", transparent 50%), ";
      }
    } else if (pattern === "rradial") {
      for (let i = 0; i < listvaluee.length; i++) {
        m =
          m +
          "repeating-radial-gradient(at " +
          Math.round((cursory[i] / (dd - 30)) * 100) +
          "% " +
          Math.round((cursorx[i] / (kk - 30)) * 100) +
          "%, " +
          listvaluee[i] +
          ", transparent 50%), ";
      }
    } else if (pattern === "conic") {
      for (let i = 0; i < listvaluee.length; i++) {
        m =
          m +
          "conic-gradient(at " +
          Math.round((cursory[i] / (dd - 30)) * 100) +
          "% " +
          Math.round((cursorx[i] / (kk - 30)) * 100) +
          "%, " +
          listvaluee[i] +
          ", transparent 50%), ";
      }
    } else if (pattern === "rconic") {
      for (let i = 0; i < listvaluee.length; i++) {
        m =
          m +
          "repeating-conic-gradient(at " +
          Math.round((cursory[i] / (dd - 30)) * 100) +
          "% " +
          Math.round((cursorx[i] / (kk - 30)) * 100) +
          "%, " +
          listvaluee[i] +
          ", transparent 50%), ";
      }
    }
    let str = m.slice(0, -1);
    upproperties(str.slice(0, -1));
  }

  function upvaluee(event) {
    m = "";
    let colo = event.target.value;
    let colkey = event.target.id;
    listvaluee[colkey] = colo;
    updatedvaluee([...listvaluee]);
    transo();
  }

  function add(event) {
    m = "";
    if (listvaluee.length <= 20) {
      listvaluee.unshift("#f9d41a");
      cursorx.unshift("0");
      cursory.unshift("0");
      listvalnum.push(listvaluee.length);
      updatedvaluee([...listvaluee]);
      updatednum([...listvalnum]);
      upcursorx([...cursorx]);
      upcursory([...cursory]);
      transo();
    }
  }

  const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...listvaluee];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    listvaluee = [...updatedList];
    updatedvaluee([...updatedList]);
    updatednum([...listvalnum]);
    transo();
  };

  function newselect(event) {
    colorafter(event.target.value);
  }

  function rem(event) {
    m = "";
    let indx = event.target.id;
    listvaluee.splice(indx, 1);
    updatedvaluee([...listvaluee]);
    listvalnum.pop();
    updatednum([...listvalnum]);
    cursorx.splice(indx, 1);
    cursory.splice(indx, 1);
    transo();
  }

  function post(par, parr) {
    dwidth = document.getElementById("design").offsetWidth;
    kheight = document.getElementById("design").offsetHeight;
    dd = par;
    kk = parr;
  }

  const Activee = (e) => {
    if (!mouse) {
      mouse = true;
    } else if (mouse) {
      mouse = false;
    }
    act = e.target.id;
  };

  const deact = (e) => {
    mouse = false;
  };
  //e.screenY
  const move = (e) => {
    if (mouse) {
      cursorx[act - 1] = e.pageY - 100;
      cursory[act - 1] = e.pageX - (dwidth - dd) + 15;
      upcursorx([...cursorx]);
      upcursory([...cursory]);
      transo();
    }
  };

  const syntaxup = () => {
    if (listvaluee.length > 0) {
      syntax =
        '<div id="name" style="background-color: ' +
        colorcurrent +
        "; width:200px; height:200px ;background-image: " +
        properties +
        '"></div>';
    } else {
      syntax =
        '<div id="name" style="background-color: ' +
        colorcurrent +
        '; width:100%; height:100%"></div>';
    }
  };

  const textdisplay = (e) => {
    syntaxup();
    uptext(syntax);
    updateclick("copy");
  };

  const newwin = () => {
    updatedvaluee([]);
    updatednum([]);
    transo();
    cursorx = [0];
    cursory = [0];
    upcursorx([]);
    upcursory([]);
    upproperties("");
    uptext("");
    updateclick("copy");
    pattern = "radial";
  };

  const dwn = (event) => {
    pattern = "radial";
    transo();
  };
  const dwn1 = (event) => {
    pattern = "rradial";
    transo();
  };
  const dwn2 = (event) => {
    pattern = "conic";
    transo();
  };
  const dwn3 = (event) => {
    pattern = "rconic";
    transo();
  };
  const onClicktext = () => {
    navigator.clipboard.writeText(text);
    updateclick("copied!");
  };
  return (
    <>
      <div className={`row ${styles.rowbody} m-0`}>
        <div className={`col  ${styles.colone} m-0 p-0`} id="design">
          <BodyOne
            color={colorcurrent}
            listvalnum={listvalnum}
            listvaluee={listvaluee}
            properties={properties}
            post={post}
            cursorx={cursorx}
            cursory={cursory}
            Activee={Activee}
            move={move}
            deact={deact}
          ></BodyOne>

          <GetText
            textdisplay={textdisplay}
            text={text}
            onClicktext={onClicktext}
            clickstatus={clickstatus}
          ></GetText>
        </div>
        <div className={`col ${styles.coltwo} m-0 p-0`}>
          <Colors
            add={add}
            colorcurrent={colorcurrent}
            newselect={newselect}
            textdisplay={textdisplay}
            text={text}
            newwin={newwin}
            dwn={dwn}
            dwn1={dwn1}
            dwn2={dwn2}
            dwn3={dwn3}
          ></Colors>
          <ListItem
            listvaluee={listvaluee}
            listvalnum={listvalnum}
            rem={rem}
            upvaluee={upvaluee}
            handleDrop={handleDrop}
          ></ListItem>
        </div>
      </div>
    </>
  );
}
