import React, { useEffect, useRef } from "react";

const Dropdown = ({ option, children }) => {
  const handleClick = () => {};
  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
      }}
    >
      <p>{children}</p>
    </div>
  );
};

export default Dropdown;
