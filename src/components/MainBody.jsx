import { useState } from "react";
import Home from "./Home";
import Navbar from "./navbar";
import FrontPage from "./FrontPage";

export default function MainBodyy() {
  let [dis, updis] = useState("new");
  setTimeout(function () {
    updis("view");
  }, 2000);
  return (
    <>
      {dis === "new" && <FrontPage></FrontPage>}
      {dis === "view" && (
        <div>
          <Navbar></Navbar>
          <Home></Home>
        </div>
      )}
    </>
  );
}
