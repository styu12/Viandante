import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import customReset from "styles/customReset.scss";

const GlobalStyle = createGlobalStyle`
    ${reset};
    ${customReset};

    ${({ theme }) => {
      return css`
        body {
          font-family: "GmarketSansMedium";
          font-family: "GmarketSansMedium";
          font-weight: ${theme.fonts.weight.normal};
          font-size: ${theme.fonts.size.base};
          ${theme.device.tablet} {
            font-size: 11px;
          }
          line-height: 1.3;
        }
      `;
    }}
`;

export default GlobalStyle;
