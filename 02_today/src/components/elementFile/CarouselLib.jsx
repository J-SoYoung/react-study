import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

const arr = [
  {
    id: 1,
    img: "/img/jeju1.jpg",
  },
  {
    id: 2,
    img: "/img/jeju2.jpg",
  },
  {
    id: 3,
    img: "/img/jeju3.jpg",
  },
  {
    id: 4,
    img: "/img/jeju4.jpg",
  },
];

export const CarouselLib = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div>
      <Slider {...settings}>
        {arr.map((a) => {
          return <img src={a.img} key={a.id} />;
        })}
      </Slider>
    </div>
  );
};
