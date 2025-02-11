import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import "./Editable.scss";

const Editable = ({ text, placeholder, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      textField: "",
    },
  });
  const [showEdit, toggleShowEdit] = useState(false);

  return (
    <div className="editable">
      {showEdit ? (
        <form
          className="editable-text"
          onSubmit={handleSubmit((value) => {
            onSubmit(value.textField);
            reset();
            toggleShowEdit(false);
          })}
        >
          <input
            className="editable-text-input"
            autoFocus
            type="text"
            placeholder={placeholder}
            {...register("textField", { required: true })}
          />
          <div className="editable-footer">
            <button className="submit-button" type="submit">
              Submit
            </button>
            <IoIosClose
              className="form-close"
              onClick={() => {
                reset();
                toggleShowEdit(false);
              }}
            />
          </div>
        </form>
      ) : (
        <p
          style={{
            background: "linear-gradient(to right, blueviolet, white)",
          }}
          className="default-edit-text"
          onClick={() => {
            setTimeout(() => {
              toggleShowEdit(true);
            }, 25);
          }}
        >
          {text || "Add Text"}
        </p>
      )}
    </div>
  );
};

export default Editable;
