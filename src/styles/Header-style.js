import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

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

//테마 변경버튼
const ThemeSwitchBtn = styled.button`
    ${({ theme }) => {
        return css`
            background-color: ${theme.colors.primary};
            color: ${theme.colors.secondary};
            font-size: ${theme.fonts.size.base};
            border-radius: 8px;
        `;
    }}
`;

const CustomNavigator = styled.ul`
        padding: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        height: 100%;
`;

const CustomNavigatorLi = styled.li`
    ${({ theme }) => {
        return css`
            color: ${theme.colors.primary};
            width: 23%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        `;
    }}
`;

const CustomNavigatorLink = styled(Link)`
    ${({ theme }) => {
        return css`
            text-decoration: none;
            color: ${theme.colors.primary}
        `;
    }}
`;

const styledComponents = { Container, ThemeSwitchBtn, CustomNavigator, CustomNavigatorLi, CustomNavigatorLink };

export default styledComponents;