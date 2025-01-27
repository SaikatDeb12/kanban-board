import React from "react";
import Chip from "../Chip/Chip";
import "./Card.scss";
import { SlOptions } from "react-icons/sl";

const Card = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-label">
          <Chip text="Frontend" color="green" />
          <SlOptions className="options" />
        </div>
      </div>
    </div>
  );
};
export default Card;
