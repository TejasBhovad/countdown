"use client";
import React, { useState, useRef, useEffect } from "react";
import Pen from "@/components/logos/Pen";

const ClickArea = ({ placeholder, onChange }) => {
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
      setError("Description can't be empty");
    } else {
      setError("");
    }
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
    if (event.target.value.trim() === "") {
      setError("Description can't be empty");
    } else {
      setError("");
    }
    onChange(event.target.value);
  };

  return (
    <div className={`relative h-24 flex gap-2`}>
      <div
        onClick={handleClick}
        className={`w-48 h-full bg-secondary text-white flex rounded-sm items-start`}
      >
        {isEditing ? (
          <div className="relative w-full h-full">
            <textarea
              className={`w-full h-full bg-transparent text-white px-2 outline-none ${
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
          <div className="px-2 flex gap-2 w-full">
            <div className="w-4/5">{text || placeholder}</div>
            <div className="w-1/5 justify-center items-center flex">
              <Pen className="" />
            </div>
          </div>
        )}
      </div>
      {error && (
        <div className="h-full flex top-0 right-0 text-red-500 text-xs justify-center items-start">
          {error}
        </div>
      )}
    </div>
  );
};

export default ClickArea;
