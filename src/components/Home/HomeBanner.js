import React from "react";
import styled from "styled-components";
import { ContentTitle, PhotoBackground } from "styles/Container-style";

// 중간에 나오는 가로 100% 배너
const Banner = styled(PhotoBackground)`
  width: 100%;
  height: 500px;
  padding: 0 0 50px 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

const BannerTitle = styled(ContentTitle)`
  font-size: 28px;
`;

export const HomeDogBanner = ({ bg }) => {
  return (
    <Banner bg={bg}>
      <ContentTitle>VIANDANTE STAY</ContentTitle>
      <BannerTitle>반려견과 함께하는 여행</BannerTitle>
    </Banner>
  );
};

export const HomeSpaceBanner = ({ bg }) => {
  return (
    <Banner bg={bg}>
      <ContentTitle>SPACE</ContentTitle>
      <BannerTitle>공간을 즐기는 법</BannerTitle>
    </Banner>
  );
};
