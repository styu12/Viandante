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
  height: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 90px 120px 0;
  background-attachment: fixed;
`;

//상단 배너 하단 텍스트wrapper
export const TopBannerTextWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopBannerTextBox = styled.div`
  width: 282px;
  height: 282px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//상단 배너 텍스트박스 속 텍스트
export const TopBannerText = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 1.3;
`;
