import styles from "./CSS/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={`${styles.navbody}`}>
        <h1>Mesh Generator</h1>
      </div>
    </>
  );
}
