import { dbService, storageService } from "fbase";
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
    width: 100%;
  }
  > div:not(:last-child) {
    margin-right: 15px;
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
  line-height: 1.3;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
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

const FlexColumnContainer = styled(FlexRowContainer)`
  margin: auto;
  width: 80%;
  flex-direction: column;
  > div:not(:last-child) {
    margin: 0 0 15px 0;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReviewPhoto = styled(PhotoBackground)`
  flex: 1;
  padding-bottom: 33%;
`;

const ReviewContent = styled.div`
  flex: 2;
  padding: 15px 25px;
`;

const Home = () => {
  // 관련 데이터 저장한 state들
  const [stays, setStays] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [BannerPhotos, setBannerPhotos] = useState({});

  // firestore data 모두 불러오기
  const getData = async () => {
    // stays data call
    await dbService.collection("Stays").onSnapshot((snapshot) => {
      const stayArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStays(stayArray);
    });

    // magazines data call
    await dbService.collection("Magazines").onSnapshot((snapshot) => {
      const magazineArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMagazines(magazineArray);
    });

    //review data call
    await dbService.collection("Reviews").onSnapshot((snapshot) => {
      const reviewArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(reviewArray);
    });

    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });
  };

  // 컴포넌트 렌더링 시 이미지 불러와서 state에 담기
  useEffect(() => {
    getData();
  }, []);

  return (
    <CustomContainer>
      <TopBanner bg={BannerPhotos.topBannerUrl}>
        <TopBannerTextBox>
          <TopBannerText>Viandante</TopBannerText>
          <TopBannerText>원주점</TopBannerText>
        </TopBannerTextBox>
      </TopBanner>

      <Section>
        <SectionTitle isCenter={true}>Viandante Stay</SectionTitle>
        <FlexRowContainer>
          {/* stays call and rendering */}
          {stays.map((s) => {
            return (
              <div key={s.id}>
                <BasicPhotoBox bg={s.thumbnailUrl}></BasicPhotoBox>
                <ContentTitle isCenter={true}>{s.description}</ContentTitle>
                <ContentBoldTitle isCenter={true}>{s.name}</ContentBoldTitle>
              </div>
            );
          })}
        </FlexRowContainer>
      </Section>

      <Banner bg={BannerPhotos.dogBannerUrl}>
        <p>VIANDANTE STAY</p>
        <p>반려견과 함께하는 여행</p>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>Magazine</SectionTitle>
        <FlexRowContainer>
          {/* magazine data call and rendering */}
          {magazines.map((m) => {
            return (
              <div key={m.id}>
                <BasicPhotoBox bg={m.thumbnailUrl}></BasicPhotoBox>
                <ContentTitle isCenter={false}>
                  {m.title.split("\\n")[0]}
                  <br />
                  {m.title.split("\\n")[1]}
                </ContentTitle>
                <ContentBoldTitle>작성일자 {m.createdAt}</ContentBoldTitle>
              </div>
            );
          })}
        </FlexRowContainer>
      </Section>

      <Section>
        <SectionTitle isCenter={false}>Event</SectionTitle>
      </Section>

      <Section>
        <SectionTitle isCenter={false}>Review</SectionTitle>
        <FlexColumnContainer>
          {/* review data call and rendering */}
          {reviews.map((r) => {
            // r.stay_id를 state에 있는 stay의 id와 비교해서 일치하면 stay의 name을 가져옴!
            let r_stay;
            stays.map((s) => {
              if (s.id === r.stay_id) {
                r_stay = s.name;
              }
            });
            return (
              <ReviewBox key={r.id}>
                <ReviewPhoto bg={r.thumbnailUrl} />
                <ReviewContent>
                  <ContentTitle>{r.type}</ContentTitle>
                  <ContentTitle>
                    {r.date} / {r_stay}
                  </ContentTitle>
                  <ContentTitle>{r.summary}</ContentTitle>
                </ReviewContent>
              </ReviewBox>
            );
          })}
        </FlexColumnContainer>
      </Section>

      <Banner bg={BannerPhotos.spaceBannerUrl}>
        <p>VIANDANTE STAY</p>
        <p>반려견과 함께하는 여행</p>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>Magazine</SectionTitle>
        <FlexRowContainer>
          {magazines.map((m) => {
            return (
              <div key={m.id}>
                <BasicPhotoBox bg={m.thumbnailUrl}></BasicPhotoBox>
                <ContentTitle isCenter={false}>
                  {m.title.split("\\n")[0]}
                  <br />
                  {m.title.split("\\n")[1]}
                </ContentTitle>
                <ContentBoldTitle>작성일자 {m.createdAt}</ContentBoldTitle>
              </div>
            );
          })}
        </FlexRowContainer>
      </Section>
    </CustomContainer>
  );
};

export default Home;
