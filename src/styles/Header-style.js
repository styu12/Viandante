import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// header 전체 컨테이너
const Container = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 80px;
      padding: ${theme.paddings.xl};
      background-color: ${theme.colors.secondary};
    `;
  }}
`;

// 페이지 네비게이션 ul
const CustomNavigator = styled.ul`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 100%;
`;

// 페이지 네비게이션 li
const CustomNavigatorLi = styled.li`
  ${({ theme }) => {
    return css`
      width: 20%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
  }}
`;

// 페이지 네비게이션 li 속 링크
const CustomNavigatorLink = styled(Link)`
  ${({ theme }) => {
    return css`
      text-decoration: none;
      text-align: center;
      font-size: 18px;
      color: ${theme.colors.black};
    `;
  }}
`;

const styledComponents = {
  Container,
  CustomNavigator,
  CustomNavigatorLi,
  CustomNavigatorLink,
};

export default styledComponents;
