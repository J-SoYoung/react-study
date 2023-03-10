import React, { useState } from "react";
import { Arrows } from "./Arrow";
import { Dots } from "./Dots";
import { imageSlider } from "./iImageSlider";
import { SliderContent } from "./SliderContent";
import "./slider.css";

export const Slider = (props) => {
  console.log(imageSlider);
  const [activeIndex, setActiveIndex] = useState(0);
  // 배열 인덱스
  const len = imageSlider.length - 1;
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
      <Arrows
        // 화살표를 클릭해서 무한으로 slide돌아가는 부분임.
        prevSlide={() =>
          // 첫 index면 마지막 index로 가, 아니면 이전 index로 가
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() => {
          // 마지막 index몀 처음으로 가, 아니면 다음 index로 가
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }}
      />
      <Dots
        activeIndex={activeIndex}
        imageSlider={imageSlider}
        onclick={(activeIndex) => {
          setActiveIndex(activeIndex);
        }}
      />
    </div>
  );
};
