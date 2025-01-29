import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import "./Editable.scss";

const Editable = (props) => {
  const { register, handleSubmit } = useForm();
  const [showEdit, toggleShowEdit] = useState(false);

  const display = (value) => {
    console.log(value.textField);
  };

  return (
    <div className="editable">
      {showEdit ? (
        <form className="editable-text" onSubmit={handleSubmit(display)}>
          <input
            type="text"
            placeholder={props.text}
            {...register("textField")}
          />
          <div className="editable-footer">
            <button className="submit-button" type="submit">
              Submit
            </button>
            <IoIosClose
              className="form-close"
              onClick={() => toggleShowEdit(!showEdit)}
            />
          </div>
        </form>
      ) : (
        <p
          className="default-edit-text"
          onClick={() => toggleShowEdit(!showEdit)}
        >
          Add Text
        </p>
      )}
    </div>
  );
};

export default Editable;
