"use client";
import React, { useState, useRef, useEffect } from "react";
import Pen from "@/components/logos/Pen";

const ClickableDiv = ({ placeholder, onChange, textColor }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text.trim() === "") {
      setError("Name can't be empty");
    } else {
      setError("");
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
    if (event.target.value.trim() === "") {
      setError("Name can't be empty");
    } else {
      setError("");
    }
    onChange(event.target.value);
  };

  return (
    <div className="relative h-24 w-full flex gap-2 flex items-center justify-center">
      <div
        onClick={handleClick}
        className="w-1/2 h-full flex items-center rounded-sm"
      >
        {isEditing ? (
          <div className="relative w-full">
            <input
              type="text"
              style={{ color: textColor }}
              className={`w-full bg-transparent text-5xl px-2 outline-none flex text-center justify-center items-center font-bold ${
                error ? "border-red-500" : ""
              }`}
              placeholder={placeholder}
              value={text}
              onChange={handleInputChange}
              onBlur={handleBlur}
              ref={inputRef}
            />
          </div>
        ) : (
          <div className="px-2 flex gap-2 w-full text-5xl flex text-center justify-center items-center font-bold">
            <div className="w-4/5" style={{ color: textColor }}>
              {text || placeholder}
            </div>
            {/* <div className="w-1/5 justify-center items-center flex">
              <Pen className="" />
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClickableDiv;
