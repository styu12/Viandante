import React from "react";
import styledComponents from "styles/Header-style";

const { Container, CustomNavigator, CustomNavigatorLi, CustomNavigatorLink } =
  styledComponents;

// 상단 메뉴바
const Header = () => {
  return (
    <Container>
      <CustomNavigatorLink to="/">Viandante</CustomNavigatorLink>

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
