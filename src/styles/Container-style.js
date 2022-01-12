import styled, { css } from "styled-components";

const CustomContainer = styled.div`
    ${({ theme }) => {
        const { colors, device, fonts, paddings } = theme;

        return css`
            width: 100%;
            height: 100%;
            background-color: ${colors.tertiary};
            ${device.tablet} {
                background-color: ${colors.red};
            }

            h1 {
                font-size: ${fonts.size.xl};
                padding: ${paddings.xl};
                text-align: center;
                ${device.tablet} {
                    font-size: ${fonts.size.base};
                }
            }
        `;
    }}
`;

export default CustomContainer;