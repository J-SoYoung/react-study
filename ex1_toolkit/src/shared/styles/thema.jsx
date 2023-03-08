import styled from "styled-components";

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

// 자주 사용하는 색을 객체로 만들자.
const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#e9e9e9",
  orange1: "#ffb300",
  blue: "#000080",
};

const borderStyle = {
  basic: `
    border : 1px solid #e9e9e9;
    padding: 10px;
    box-sizing: border-box
  `,
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

// theme 객체에 감싸서 반환한다.
const theme = {
  fontSizes,
  colors,
  common,
  borderStyle,
};

export default theme;



// font-size 통일
// color 통일
// display flex center 자동 생성기