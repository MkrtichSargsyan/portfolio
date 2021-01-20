import React from "react";
import Showcase from "../main_content/Showcase";
import MyProjects from "../main_content/MyProjects";
import AboutMe from "../main_content/AboutMe";
import Contact from "../main_content/Contact";

import styles from "../../styles/Main.module.css";

export default function Main(props) {
  console.log(props);
  return (
    <div className={props.active ? styles.ml : styles.mr}>
      <Showcase />
      <MyProjects />
      <AboutMe />
      <Contact />
    </div>
  );
}
