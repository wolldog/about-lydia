// import dependencies
import React from "react";
import Navigation from "./navbar";

// CSS Module
const styles = {
  background: {
    background: "#f5f5f5",
    opacity: "0.8",
    display: "flex-box",
    width: "100%",
  },
};

// Export Header component
export default function Header(props) {
  return (
    <div style={styles.background}>
      {/* Pass handlePageChange to Navbar */}
      <Navigation handlePageChange={props.handlePageChange} />
    </div>
  );
}
