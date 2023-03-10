import React from "react";
import styled from "styled-components";

export const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <Img className="slide-image" src={slide.img} />
            <h2 className="slide-title">{slide.title}</h2>
            <h3 className="slide-desc">{slide.desc}</h3>
          </div>
        );
      })}
    </section>
  );
};

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
