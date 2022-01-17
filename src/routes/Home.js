import { dbService, storageService } from "fbase";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  CustomContainer,
  PhotoBackground,
  TopBanner,
  TopBannerText,
  TopBannerTextBox,
  TopBannerTextWrapper,
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

// 섹션 제목 옆 작은 글씨
const SectionMiniTitle = styled.span`
  font-size: 13px;
  margin-left: 7px;
  font-weight: 300;
`;

// 섹션 밑 더보기 버튼
const SectionLink = styled(Link)`
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
  font-size: 20px;
  margin-bottom: 10px;
  line-height: 1.3;
  text-align: ${(props) => (props.isCenter ? "center" : "left")};
`;

// 이미지 밑 진한 제목
const ContentBoldTitle = styled(ContentTitle)`
  font-weight: 700;
`;

const ContentText = styled.p`
  font-family: "GmarketSansLight";
  font-size: 15px;
  line-height: 1.5;
`;

const ContentLink = styled(Link)`
  font-size: 14px;
  color: blue;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid blue;
  text-align: center;
  display: block;
  margin: auto;
  width: 82px;
`;

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

//매거진 관련 components
const MagazineBox = styled.div`
  padding: 30px;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 25px;
  transition: transform 0.5s;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const MagazineTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  border-bottom: 1px solid gray;
  margin-bottom: 15px;
`;

const MagazineTitle = styled(ContentTitle)`
  grid-row: 1 / 3;
  font-size: 22px;
`;

const MagazineBarcode = styled.img`
  width: 80%;
  display: block;
  margin: auto;
  object-fit: contain;
`;

const MagazineMonth = styled.span`
  font-size: 11px;
  font-weight: 300;
  text-align: center;
  margin-top: 3px;
  font-family: "GmarketSansLight";
  font-size: 9px;
`;

const MagazinePhotoBox = styled(BasicPhotoBox)`
  padding-bottom: 120%;
  margin-bottom: 0;
  cursor: pointer;
`;

const MagazineCreatedAt = styled.p`
  font-size: 17px;
  font-family: "GmarketSansLight";
  text-align: center;
`;

//이벤트 관련 components
const EventSection = styled(Section)`
  background: linear-gradient(#ededed 62%, #fafafa 38%);
`;

const EventContainer = styled(FlexRowContainer)`
  margin-bottom: 50px;
`;

const EventPhoto = styled(BasicPhotoBox)`
  flex: 1;
  padding-bottom: 33%;
  position: relative;
`;

const EventPhotoMark = styled.span`
  background-color: white;
  color: blue;
  position: absolute;
  top: 30px;
  right: 35px;
  font-size: 11px;
  padding: 5px 13px;
  border-radius: 3px;
`;

const EventDescWrapper = styled.div`
  flex: 2;
`;

//리뷰 관련 components
const ReviewContainer = styled(FlexRowContainer)`
  margin: auto;
  width: 80%;
  flex-direction: column;
  > div:not(:last-child) {
    margin: 0 0 25px 0;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border-radius: 18px;
  transition: transform 0.4s;
  &:hover {
    transform: scale(1.03);
  }
`;

const ReviewPhoto = styled(PhotoBackground)`
  flex: 1;
  padding-bottom: 33%;
  border-radius: 18px 0 0 18px;
`;

const ReviewContent = styled.div`
  flex: 2;
  padding: 35px 65px;
`;

const ReviewType = styled.p`
  border: 1px solid gray;
  padding: 5px;
  font-size: 13px;
  width: 65px;
  text-align: center;
  margin-bottom: 10px;
`;

const ReviewText = styled(ContentTitle)`
  font-family: "MarketSansLight";
  line-height: 1.5;
  margin-top: 15px;
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
                <ContentLink to="/stay">객실보러가기</ContentLink>
              </div>
            );
          })}
        </FlexRowContainer>
      </Section>

      <Banner bg={BannerPhotos.dogBannerUrl}>
        <ContentTitle>VIANDANTE STAY</ContentTitle>
        <BannerTitle>반려견과 함께하는 여행</BannerTitle>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>
          Magazine<SectionMiniTitle>With Dog</SectionMiniTitle>
        </SectionTitle>
        <FlexRowContainer>
          {/* magazine data call and rendering */}
          {magazines.map((m) => {
            return (
              <div key={m.id}>
                <MagazineBox
                  onClick={() => {
                    window.open("http://www.naver.com");
                  }}
                >
                  <MagazineTitleWrapper>
                    <MagazineTitle isCenter={false}>
                      {m.title.split("\\n")[0]}
                      <br />
                      {m.title.split("\\n")[1]}
                    </MagazineTitle>
                    <MagazineBarcode
                      src={require("../assets/main/barcode.png")}
                    />
                    <MagazineMonth>{m.month}</MagazineMonth>
                  </MagazineTitleWrapper>
                  <MagazinePhotoBox bg={m.thumbnailUrl}></MagazinePhotoBox>
                </MagazineBox>
                <MagazineCreatedAt>작성일자 {m.createdAt}</MagazineCreatedAt>
              </div>
            );
          })}
        </FlexRowContainer>
        <SectionLink to="/magazine"> &gt; 매거진 더보기</SectionLink>
      </Section>

      <EventSection>
        <SectionTitle isCenter={false}>Event</SectionTitle>
        <ContentTitle>
          비안단테 펜션은 매달 이벤트를 통해 두 팀에게 50만원 상당의 무료
          숙박권을 드리는 초 대박 이벤트를 진행합니다.
        </ContentTitle>
        <EventContainer>
          <EventPhoto bg={require("../assets/main/eventThumbnail.png")}>
            <EventPhotoMark>진행중</EventPhotoMark>
          </EventPhoto>
          <EventDescWrapper>
            <ContentTitle>이벤트 기간 ☑</ContentTitle>
            <ContentText>매월 1일 ~ 20일</ContentText>
            <br />
            <ContentTitle>참여 방법 ☑</ContentTitle>
            <ContentText>
              기존 팔로워 분들도 당연히 참여 가능합니다 :)
            </ContentText>
            <br />
            <ContentText>1. viandante_official 팔로우 하기</ContentText>
            <br />
            <ContentText>2. 이 게시물 좋아요 + 이 게시물 저장</ContentText>
            <br />
            <ContentText>
              3. 인스타그램 스토리 공유 + 공유한 스토리에 viandante_official
              언급 필수!
            </ContentText>
            <br />
            <ContentText>
              4. 이 게시물에 친구 3명 이상 태그 후 참여완료 댓글 남기기
            </ContentText>
          </EventDescWrapper>
        </EventContainer>
        <EventContainer>
          <div>
            <ContentTitle>당첨자 발표 ☑</ContentTitle>
            <ContentText>
              매월 21일 오후 8시 추첨으로 진행할 예정입니다.
            </ContentText>
            <br />
            <ContentTitle>이벤트 상품 ☑</ContentTitle>
            <ContentText>
              - 1박 평일 무료 숙박권
              <br />
              - Viandante Chuncheon 한옥펜션 한 팀<br />
              - Viandante Wonju B동 한 팀<br />두 곳 모두 애견 동반 가능합니다.
            </ContentText>
          </div>
          <div>
            <ContentText>
              자세한 사진 및 정보는 네이버 비안단테 펜션 검색 <br />
              또는 홈페이지 참조
            </ContentText>
            <br />
            <ContentTitle>참고 사항 ☑</ContentTitle>
            <ContentText>
              - 숙박 가능 기간: 9월 이벤트 당첨자는 다음 달인 10월 평일 숙박을
              도와드립니다.
              <br />
              - 비공개 및 부계정, 이벤트 헌터는 추첨 제외
              <br />- 숙박 후 인스타 업로드 필수 조건
            </ContentText>
            <br />
          </div>
        </EventContainer>
        <a href="http://www.naver.com" target="_blank" rel="noreferrer">
          {" "}
          &gt; 인스타 참여하기
        </a>
      </EventSection>

      <Section>
        <SectionTitle isCenter={false}>Review</SectionTitle>
        <ReviewContainer>
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
                  <ReviewType>{r.type}</ReviewType>
                  <ContentTitle>
                    {r.date} / {r_stay}
                  </ContentTitle>
                  <ReviewText>{r.summary}</ReviewText>
                </ReviewContent>
              </ReviewBox>
            );
          })}
        </ReviewContainer>
        <SectionLink to="/review"> &gt; 리뷰 더보기</SectionLink>
      </Section>

      <Banner bg={BannerPhotos.spaceBannerUrl}>
        <ContentTitle>SPACE</ContentTitle>
        <BannerTitle>공간을 즐기는 법</BannerTitle>
      </Banner>

      <Section>
        <SectionTitle isCenter={false}>Magazine</SectionTitle>
        <FlexRowContainer>
          {/* magazine data call and rendering */}
          {magazines.map((m) => {
            return (
              <div key={m.id}>
                <MagazineBox
                  onClick={() => {
                    window.open("http://www.naver.com");
                  }}
                >
                  <MagazineTitleWrapper>
                    <MagazineTitle isCenter={false}>
                      {m.title.split("\\n")[0]}
                      <br />
                      {m.title.split("\\n")[1]}
                    </MagazineTitle>
                    <MagazineBarcode
                      src={require("../assets/main/barcode.png")}
                    />
                    <MagazineMonth>{m.month}</MagazineMonth>
                  </MagazineTitleWrapper>
                  <MagazinePhotoBox bg={m.thumbnailUrl}></MagazinePhotoBox>
                </MagazineBox>
                <MagazineCreatedAt>작성일자 {m.createdAt}</MagazineCreatedAt>
              </div>
            );
          })}
        </FlexRowContainer>
        <SectionLink to="/magazine"> &gt; 매거진 더보기</SectionLink>
      </Section>
    </CustomContainer>
  );
};

export default Home;
