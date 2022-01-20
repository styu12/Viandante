import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import TopBanner from "components/TopBanner";
import HomeEvent from "components/Home/HomeEvent";
import HomeReview from "components/Home/HomeReview";
import { HomeDogBanner, HomeSpaceBanner } from "components/Home/HomeBanner";
import { HomeMagazineDog } from "components/Home/HomeMagazine";
import HomeStay from "components/Home/HomeStay";

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
      <TopBanner bg={BannerPhotos.topBannerUrl} />

      <HomeStay stays={stays} />

      <HomeDogBanner bg={BannerPhotos.dogBannerUrl} />

      <HomeMagazineDog magazines={magazines} />

      <HomeEvent />

      <HomeReview reviews={reviews} stays={stays} />

      <HomeSpaceBanner bg={BannerPhotos.spaceBannerUrl} />

      <HomeMagazineDog magazines={magazines} />
    </CustomContainer>
  );
};

export default Home;
