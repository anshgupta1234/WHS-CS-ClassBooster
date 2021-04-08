import React from "react";
const styles = {
  border: "none",
  cursor: "move",
  width: "120px",
  height: "60px",
  textAlign: "center",
};
export const Box = ({ title, yellow }) => {
  const backgroundColor = title === "Teacher Desk" ? "#00c2cb" : "white";
  return <div style={{ ...styles, backgroundColor }}>{title}</div>;
};