import React from "react";
import "./Chip.scss";

const Chip = ({ text, color }) => {
  return (
    <div className="chip" style={{ background: color }}>
      {text}
    </div>
  );
};

export default Chip;
