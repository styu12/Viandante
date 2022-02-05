import React from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";
import styledComponents from "styles/Header-style";

const { Container, CustomNavigator, CustomNavigatorLi, CustomNavigatorLink } =
  styledComponents;

const LogoIcon = styled(PhotoBackground)`
  width: 100px;
  height: 55px;
  background-size: contain;
  background-repeat: no-repeat;
`;

// 상단 메뉴바
const Header = () => {
  return (
    <Container>
      <CustomNavigatorLink to="/">
        <LogoIcon bg={require("../assets/logo/logoText.png")} />
      </CustomNavigatorLink>

      <CustomNavigator>
        <CustomNavigatorLi>
          <CustomNavigatorLink to="/stay">Stay</CustomNavigatorLink>
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
  );
};

export default Header;
