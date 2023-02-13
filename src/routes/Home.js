import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import {
  CustomContainer,
  Section,
  SectionLink,
  SectionTitle,
} from "styles/Container-style";
import TopBanner from "components/TopBanner";
// import HomeEvent from "components/Home/HomeEvent";
import HomeReview from "components/Home/HomeReview";
import { HomeDogBanner, HomeSpaceBanner } from "components/Home/HomeBanner";
import {
  HomeMagazineDog,
  HomeMagazineSpace,
} from "components/Home/HomeMagazine";
import HomeStay from "components/Home/HomeStay";
import styled from "styled-components";
// import EventPop from "components/EventPop";

const ReviewContainer = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  flex-direction: column;
  > div:not(:last-child) {
    margin: 0 0 25px 0;
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 95%;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const Home = () => {
  // 관련 데이터 저장한 state들
  const [stays, setStays] = useState([]);
  const [dogMagazines, setDogMagazines] = useState([]);
  const [spaceMagazines, setSpaceMagazines] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [BannerPhotos, setBannerPhotos] = useState({});
  // const [isPop, setIsPop] = useState(true);

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

    // dogMagazines data call
    const dogMagazinesArray = [];
    await dbService
      .collection("Magazines")
      .where("type", "==", "Dog")
      .where("main", "==", true)
      .orderBy("createdAt", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          dogMagazinesArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setDogMagazines(dogMagazinesArray);

    // spaceMagazines data call
    const spaceMagazinesArray = [];
    await dbService
      .collection("Magazines")
      .where("type", "==", "Space")
      .where("main", "==", true)
      .orderBy("createdAt", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          spaceMagazinesArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setSpaceMagazines(spaceMagazinesArray);

    //review data call
    const reviewArray = [];
    await dbService
      .collection("Reviews")
      .where("main", "==", true)
      .orderBy("date", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          reviewArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setReviews(reviewArray);

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
    // setIsPop(true);
  }, []);

  return (
    <CustomContainer>
      {/* {isPop ? (
        <EventPop
          setIsPop={setIsPop}
          imgUrl="https://firebasestorage.googleapis.com/v0/b/viandante-149df.appspot.com/o/Events%2F1%2Fthumb.jpg?alt=media&token=ce47bbe1-ed0a-4292-b577-056cf8a30ac8"
        />
      ) : null} */}

      <TopBanner bg={BannerPhotos.topBannerUrl} />

      <HomeStay stays={stays} />

      {/* <HomeDogBanner bg={BannerPhotos.dogBannerUrl} /> */}

      <HomeMagazineDog dogMagazines={dogMagazines} />

      {/* <HomeEvent /> */}

      <Section>
        <SectionTitle isCenter={false}>Review</SectionTitle>
        <ReviewContainer>
          {reviews.map((r) => {
            if (r.stay === "wonju") {
            return null;
          }
          return (
            <HomeReview key={r.id} r={r} stays={stays} />
          )}
          )}
          <SectionLink to="/review"> &gt; 리뷰 더보기</SectionLink>
        </ReviewContainer>
      </Section>

      <HomeSpaceBanner bg={BannerPhotos.spaceBannerUrl} />

      <HomeMagazineSpace spaceMagazines={spaceMagazines} />
    </CustomContainer>
  );
};

export default Home;
