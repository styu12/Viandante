import { storageService } from "fbase";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  CustomContainer,
  PhotoBackground,
  TopBanner,
  TopBannerText,
  TopBannerTextBox,
} from "styles/Container-style";

// 각 섹션 컨테이너
const Section = styled.div`
  width: 100%;
  padding: 20px 10%;
  margin: 40px 0;
`;

// 섹션 속 제목
const SectionTitle = styled.p`
  font-size: 28px;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
  margin: 25px 0;
  ${({ theme }) => {
    const { device, fonts } = theme;
  }}
`;

// 가로 flex 컨테이너
const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  > div {
    width: 49%;
  }
`;

// 가장 기본 이미지상자 ... 정사각형
const BasicPhotoBox = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
`;

// 이미지 밑의 제목
const ContentTitle = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

// 이미지 밑 진한 제목
const ContentBoldTitle = styled(ContentTitle)`
  font-weight: 700;
`;

// 중간에 나오는 가로 100% 배너
const Banner = styled(PhotoBackground)`
  width: 100%;
  height: 500px;
  padding: 5% 13%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const Home = () => {
  // 이미지 담은 state
  const [photoUrl, setPhotoUrl] = useState("");

  // firestorage에서 이미지 가져오는 함수
  const getPhotoUrl = async () => {
    const storageRef = storageService.ref("test.jpeg");
    const storageUrl = await storageRef.getDownloadURL();
    setPhotoUrl(storageUrl);
  };

  // 컴포넌트 렌더링 시 이미지 불러와서 state에 담기
  useEffect(() => {
    getPhotoUrl();
  }, []);

  return (
    <CustomContainer>
      <TopBanner bg={photoUrl}>
        <TopBannerTextBox>
          <TopBannerText>Viandante</TopBannerText>
          <TopBannerText>원주점</TopBannerText>
        </TopBannerTextBox>
      </TopBanner>

      <Section>
        <SectionTitle isCenter={true}>Viandante Stay</SectionTitle>
        <FlexRowContainer>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>자연속 힐링 독채 펜션</ContentTitle>
            <ContentBoldTitle>비안단테 원주</ContentBoldTitle>
          </div>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>한옥에서의 완벽한 하루</ContentTitle>
            <ContentBoldTitle>비안단테 춘천</ContentBoldTitle>
          </div>
        </FlexRowContainer>
      </Section>

      <Banner bg={photoUrl}>
        <p>VIANDANTE STAY</p>
        <p>반려견과 함께하는 여행</p>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>Magazine</SectionTitle>
        <FlexRowContainer>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>"강아지와 차를 안전하게 타는 방법"</ContentTitle>
            <ContentBoldTitle>작성일자 2022.01.10</ContentBoldTitle>
          </div>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>"강아지와 물에서 노는 방법"</ContentTitle>
            <ContentBoldTitle>작성일자 2022.01.01</ContentBoldTitle>
          </div>
        </FlexRowContainer>
      </Section>

      <Section>
        <SectionTitle isCenter={false}>Event</SectionTitle>
      </Section>

      <Section>
        <SectionTitle isCenter={false}>Review</SectionTitle>
      </Section>

      <Banner bg={photoUrl}>
        <p>VIANDANTE STAY</p>
        <p>반려견과 함께하는 여행</p>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>Magazine</SectionTitle>
        <FlexRowContainer>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>"강아지와 차를 안전하게 타는 방법"</ContentTitle>
            <ContentBoldTitle>작성일자 2022.01.10</ContentBoldTitle>
          </div>
          <div>
            <BasicPhotoBox bg={photoUrl}></BasicPhotoBox>
            <ContentTitle>"강아지와 물에서 노는 방법"</ContentTitle>
            <ContentBoldTitle>작성일자 2022.01.01</ContentBoldTitle>
          </div>
        </FlexRowContainer>
      </Section>
    </CustomContainer>
  );
};

export default Home;
