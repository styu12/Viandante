import React from "react";
import { Link } from "react-router-dom";
import styledComponents from "styles/Header-style";

const { Container, CustomNavigator, CustomNavigatorLi, CustomNavigatorLink, ThemeSwitchBtn } = styledComponents;

// 상단 메뉴바
const Header = ({ switchTheme, currentThemeText }) => {
    return (
        <Container>
            <ThemeSwitchBtn
                onClick={() => {
                    switchTheme();
                }}>
                {currentThemeText}
            </ThemeSwitchBtn>
            <h1><Link to="/">Viandante</Link></h1>
            <CustomNavigator>
                <CustomNavigatorLi>
                    <CustomNavigatorLink to="/room">Room</CustomNavigatorLink>
                </CustomNavigatorLi>
                <CustomNavigatorLi>
                    <CustomNavigatorLink to="/review">Review</CustomNavigatorLink>
                </CustomNavigatorLi>
                <CustomNavigatorLi>
                    <CustomNavigatorLink to="/magazine">Magazine</CustomNavigatorLink>
                </CustomNavigatorLi>
                <CustomNavigatorLi>
                    <CustomNavigatorLink to="/event">Event</CustomNavigatorLink>
                </CustomNavigatorLi>
            </CustomNavigator>
        </Container>
    )
}

export default Header;