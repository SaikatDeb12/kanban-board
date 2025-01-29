import React, { useState } from "react";
import Chip from "../Chip/Chip";
import "./Card.scss";
import { SlOptions } from "react-icons/sl";
import { GoClock } from "react-icons/go";
import { GoChecklist } from "react-icons/go";
import Dropdown from "../Dropdown/Dropdown";

const Card = () => {
  const [dropdown, showDropdown] = useState(false);
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-label">
          <Chip text="Frontend" color="green" />
          <SlOptions
            style={dropdown && { opacity: "1" }}
            className="options"
            onClick={() => showDropdown(!dropdown)}
          />
          <Dropdown>{dropdown ? "Delete Card" : ""}</Dropdown>
        </div>
        <div className="card-title">Lorem ipsum dolor sit amet.</div>
        <div className="card-footer">
          <p>
            <GoClock />
            2nd Sept
          </p>
          <p>
            <GoChecklist />
            2/3
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
