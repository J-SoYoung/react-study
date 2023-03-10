import React from "react";
import styled from "styled-components";

export const Dots = ({ activeIndex, onclick, imageSlider }) => {
  console.log(imageSlider);
  return (
    <div className="all-dots">
      {imageSlider.map((slide, index) => {
        return (
          <span
            key={index}
            className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
            onClick={() => onclick(index)}
          ></span>
        );
      })}
    </div>
  );
};
