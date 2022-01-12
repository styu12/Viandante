const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  red: "#ff4d4d",
  yellow: "#ffff4d",
  blue: "#0099ff",
  black: "#2d3436",
};

const size = {
  mobile: "425px",
  tablet: "768px",
  desktop: "1440px",
};

//미디어 쿼리 적용변수
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktop: `@media only screen and (max-width: ${size.desktop})`,
};

//테마와 관련없이 공통으로 사용되는 변수들
export const theme = {
  margins,
  paddings,
  fonts,
  colors,
  device,
};
