import React from "react";
import Navigation from "./navbar";

const styles = {
  background: {
    background: "#f5f5f5",
    opacity: "0.8",
    display: "flex-box",
    width: "100%",
  },
};

export default function Header(props) {
  return (
    <div style={styles.background}>
      <Navigation handlePageChange={props.handlePageChange} />
    </div>
  );
}
