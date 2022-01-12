import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import customReset from "styles/customReset.scss";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${customReset};

    ${({ theme }) => {
        return css`
            body {
                font-family: ${theme.fonts.family.base};
                font-weight: ${theme.fonts.weight.normal};
                font-size: ${theme.fonts.size.base};
                ${theme.device.tablet} {
                    font-size: 11px;
                }
            }
        `;
    }}
`;

export default GlobalStyle;