import React from "react";
const styles = {
  border: "none",
  cursor: "move",
  width: "120px",
  height: "60px",
  textAlign: "center",
};
export const Box = ({ title, yellow, onClick }) => {
  const backgroundColor = title === "Teacher Desk" ? "#00c2cb" : "white";
  const cs =  title === "Teacher Desk" ? "hidden" : "deskButton";
  return <div style={{ ...styles, backgroundColor }}>
          <button
            className={cs}
            onClick={onClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fd0061" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </button>
          {title}
        </div>;
};