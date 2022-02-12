import React from "react";
import styled from "styled-components";

const TopBanner = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${(props) => props.bg});
  background-position: center center;
  background-size: cover;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 30px 14%;
  transition: all 0.5s;
  @media (max-width: 768px) {
    padding: 20px 7%;
  }
`;

const SubTitle = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const BannerTitle = styled.p`
  font-size: 28px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const PageTopBanner = ({ bg, subTitle, title }) => {
  return (
    <TopBanner bg={bg}>
      <SubTitle>{subTitle}</SubTitle>
      <BannerTitle>{title}</BannerTitle>
    </TopBanner>
  );
};

export default PageTopBanner;
