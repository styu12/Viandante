import React from "react";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

//상단 배너 (광고용 배너)
const TopBannerContainer = styled(PhotoBackground)`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 0 90px 120px 0;
`;

//상단 배너 하단 텍스트wrapper
const TopBannerTextWrapper = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBannerTextBox = styled.div`
  width: 282px;
  height: 282px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//상단 배너 텍스트박스 속 텍스트
const TopBannerText = styled.p`
  font-size: 16px;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const TopBanner = ({ bg }) => {
  return (
    <TopBannerContainer bg={bg}>
      <TopBannerTextWrapper>
        <TopBannerTextBox>
          <TopBannerText>로고</TopBannerText>
          <TopBannerText>
            도심을 벗어난 안식처, <br />
            반려견과 함께하는 여행
          </TopBannerText>
          <TopBannerText>
            Viandante <br />
            원주점 바로가기 →
          </TopBannerText>
        </TopBannerTextBox>
      </TopBannerTextWrapper>
    </TopBannerContainer>
  );
};

export default TopBanner;
