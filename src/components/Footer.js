// import dependencies; React, internal assets
import React from "react";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow.svg";

// CSS Modules
const styles = {
  footer: {
    background: "white",
    width: "100%",
    opacity: "0.7",
    height: "7vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    marginTop: "1rem",
  },

  img: {
    height: "30px",
    margin: "2rem",
  },
};

// export Footer component
export default function Footer() {
  return (
    <div style={styles.footer}>
      <a href="https://github.com/wolldog">
        <img style={styles.img} src={github} alt="gitHub logo" />
      </a>
      <a href="https://www.linkedin.com/in/lydia-wallis-b1bb0590/">
        <img style={styles.img} src={linkedin} alt="linkedIn logo"/>
      </a>
      <a href="https://stackoverflow.com/users/20200480/wolldog">
        <img style={styles.img} src={stack} alt="StackOverflow logo"/>
      </a>
    </div>
  );
}
