import React from "react";
const styles = {
  border: "none",
  cursor: "move",
  width: "100px",
  height: "50px",
  textAlign: "center",
};
export const Box = ({ title, yellow }) => {
  const backgroundColor = title === "Teacher Desk" ? "#00c2cb" : "white";
  return <div style={{ ...styles, backgroundColor }}>{title}</div>;
};