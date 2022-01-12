import styled, { css } from "styled-components";

//모든 페이지 적용되는 가장 상위 컨테이너
export const CustomContainer = styled.div`
  ${({ theme }) => {
    const { colors, device, fonts, paddings } = theme;

    return css`
      width: 100%;
      height: 100%;
      ${device.tablet} {
        /* background-color: ${colors.red}; */
      }

      h1 {
        font-size: ${fonts.size.xl};
        padding: ${paddings.xl};
        ${device.tablet} {
          font-size: ${fonts.size.base};
        }
      }
    `;
  }}
`;

//배경에 이미지 들어가는 효과
export const PhotoBackground = styled.div`
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
`;

//상단 배너 (광고용 배너)
export const TopBanner = styled(PhotoBackground)`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

//상단 배너 하단 텍스트박스
export const TopBannerTextBox = styled.div`
  width: 400px;
  height: 150px;
  background-color: white;
`;

//상단 배너 텍스트박스 속 텍스트
export const TopBannerText = styled.p`
  ${({ theme }) => {
    const { fonts, paddings, device } = theme;

    return css`
      padding: ${paddings.lg} ${paddings.base};
      font-size: ${fonts.size.sm};
      margin-bottom: 5px;
    `;
  }}
`;
