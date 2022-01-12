const margins = {
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem"
};

const paddings = {
    sm: ".5rem",
    base: "1rem",
    lg: "2rem",
    xl: "3rem"
};

const fonts = {
    family: {
        base: `'Noto Sans KR', sans-serif`,
        title: `'Merriweather', serif`
    },
    size: {
        sm: "1.4rem",
        base: "1.6rem",
        lg: "2rem",
        xl: "2.5rem",
        title: "6rem"
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 700
    }
};

const colors = {
    red: "#ff4d4d",
    yellow: "#ffff4d",
    blue: "#0099ff"
};

const size = {
    mobile: "425px",
    tablet: "768px",
    desktop: "1440px"
};

//미디어 쿼리 적용변수
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktop: `@media only screen and (max-width: ${size.desktop})`
};

//테마에 따라 다른 값을 갖는 색상들
const lightThemeColors = {
    ...colors,
    primary: "#333",
    secondary: "#fff",
    tertiary: "#808080"
};

const darkThemeColors = {
    ...colors,
    primary: "#fff",
    secondary: "#333",
    tertiary: "#d4d0c4"
};

//테마와 관련없이 공통으로 사용되는 변수들
const defaultTheme = {
    margins,
    paddings,
    fonts,
    device
};

//각 테마는 공통 변수와 함께, 각기 다른 색상값들을 가진다.
export const darkTheme = {
    ...defaultTheme,
    colors: darkThemeColors
};

export const lightTheme = {
    ...defaultTheme,
    colors: lightThemeColors
};
