"use client";
import React, { useState, useRef, useEffect } from "react";

import Color from "@/components/logos/Color";
import Cross from "@/components/logos/Cross";
const ColorPickerPane = ({
  textColor,
  setTextColor,
  inputColor,
  setInputColor,
  borderColor,
  setBorderColor,
  backgroundColor,
  setBackgroundColor,
  buttonColor,
  setButtonColor,
  headingColor,
  setHeadingColor,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });
  const colorPickerRef = useRef(null);

  useEffect(() => {
    if (colorPickerRef.current) {
      const rect = colorPickerRef.current.getBoundingClientRect();
      setPickerPosition({ x: rect.x, y: rect.y });
    }
  }, [isOpen]);

  const handleColorChange = (e) => {
    const color = e.target.value;
    setPrimaryColor(color);
  };

  const handleSecondaryColorChange = (e) => {
    const color = e.target.value;
    setSecondaryColor(color);
  };

  const handleTextColorChange = (e) => {
    const color = e.target.value;
    setTextColor(color);
  };

  const handleInputColorChange = (e) => {
    const color = e.target.value;
    setInputColor(color);
  };

  const handleBorderColorChange = (e) => {
    const color = e.target.value;
    setBorderColor(color);
  };

  const handleBackgroundColorChange = (e) => {
    const color = e.target.value;
    setBackgroundColor(color);
  };

  const handleHeadingColorChange = (e) => {
    const color = e.target.value;
    setHeadingColor(color);
  };

  const handleButtonColorChange = (e) => {
    const color = e.target.value;
    setButtonColor(color);
  };

  const handleOutsideClick = (e) => {
    if (!colorPickerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleColorPane = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* Button to open/close the color pane */}
      <button
        onClick={toggleColorPane}
        className="p-2 flex justify-center items-center absolute inset-0 flex justify-center z-50 border-2 border-black rounded-full w-12 h-12 bg-white rounded-full shadow-lg mx-2 my-2"
      >
        {isOpen ? <Cross /> : <Color />}
      </button>

      {/* Color pane (modal) */}
      {isOpen && (
        <div className={`fixed inset-0 flex items-center justify-center z-50`}>
          <div
            ref={colorPickerRef}
            className="fixed left-0 top-72 transform -translate-x-1 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl"
          >
            {/* Primary Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="primaryColor">Primary Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: primaryColor }}
              >
                <input
                  type="color"
                  id="primaryColor"
                  value={primaryColor}
                  onChange={handleColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Secondary Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="secondaryColor">Secondary Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: secondaryColor }}
              >
                <input
                  type="color"
                  id="secondaryColor"
                  value={secondaryColor}
                  onChange={handleSecondaryColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Text Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="textColor">Text Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: textColor }}
              >
                <input
                  type="color"
                  id="textColor"
                  value={textColor}
                  onChange={handleTextColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Input Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="inputColor">Input Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: inputColor }}
              >
                <input
                  type="color"
                  id="inputColor"
                  value={inputColor}
                  onChange={handleInputColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Border Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="borderColor">Border Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: borderColor }}
              >
                <input
                  type="color"
                  id="borderColor"
                  value={borderColor}
                  onChange={handleBorderColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Background Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="backgroundColor">Background Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: backgroundColor }}
              >
                <input
                  type="color"
                  id="backgroundColor"
                  value={backgroundColor}
                  onChange={handleBackgroundColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Heading Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="headingColor">Heading Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 relative border-2 border-black"
                style={{ backgroundColor: headingColor }}
              >
                <input
                  type="color"
                  id="headingColor"
                  value={headingColor}
                  onChange={handleHeadingColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>

            {/* Button Color Picker */}
            <div className="mb-4 flex gap-2 items-center">
              <div className="flex items-center w-32">
                <label htmlFor="buttonColor">Button Color</label>
              </div>

              <div
                className="rounded-full w-5 h-5 bg-red-400 relative border-2 border-black"
                style={{ backgroundColor: buttonColor }}
              >
                <input
                  type="color"
                  id="buttonColor"
                  value={buttonColor}
                  onChange={handleButtonColorChange}
                  className="rounded-full absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPickerPane;
