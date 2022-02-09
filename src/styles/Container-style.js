import { Link } from "react-router-dom";
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

// 이미지 밑의 제목
export const ContentTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.3;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

// 이미지 밑 진한 제목
export const ContentBoldTitle = styled(ContentTitle)`
  font-weight: 700;
`;

export const ContentText = styled.p`
  font-family: "GmarketSansLight";
  font-size: 15px;
  line-height: 1.5;
`;

// 각 섹션 컨테이너
export const Section = styled.div`
  width: 100%;
  padding: 20px 10%;
  margin: 40px 0;
  position: relative;
`;

// 섹션 속 제목
export const SectionTitle = styled.p`
  font-size: 24px;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
  margin: 25px 0;
`;

// 섹션 제목 옆 작은 글씨
export const SectionMiniTitle = styled.span`
  font-size: 13px;
  margin-left: 7px;
  font-weight: 300;
`;

// 섹션 밑 더보기 버튼
export const SectionLink = styled(Link)`
  font-size: 16px;
  display: block;
  margin: 40px auto;
  width: 130px;
  text-decoration: none;
  color: gray;
  transition: all 0.4s;
  &:hover {
    color: black;
  }
`;

// 가로 flex 컨테이너
export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    width: 100%;
  }
  > div:not(:last-child) {
    margin-right: 35px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// 가장 기본 이미지상자 ... 정사각형
export const BasicPhotoBox = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
`;
