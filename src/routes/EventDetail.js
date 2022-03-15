import PageTopBanner from "components/Page/PageTopBanner";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  padding: 40px 14%;
  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const EventTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
  margin-top: 85px;
  text-align: center;
`;

const EventTitle = styled.h3`
  font-size: 15px;
  margin: 10px 0;
`;

const EventDesc = styled.p`
  font-size: 11px;
  color: gray;
`;

const ImagesWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  border-top: 1px solid black;
`;

const EventImage = styled.div`
  width: 70%;
  padding-bottom: 70%;
  background: black;
  margin: auto;
  margin-bottom: 15px;
`;

const BackBtn = styled.button`
  font-size: 15px;
  color: gray;
  border: 1px solid gray;
  border-radius: 10px;
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  cursor: pointer;
`;

const EventDetail = () => {
  const [type, setType] = useState("ongoing");
  const [BannerPhotos, setBannerPhotos] = useState({});
  const navigate = useNavigate();

  const getEvents = async () => {
    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });
  };

  useEffect(() => {
    getEvents();
  }, []);

  const toEventList = () => {
    navigate("/event");
  };

  return (
    <CustomContainer>
      {/* <PageTopBanner
        bg={
          type === ""
            ? BannerPhotos.reviewAllBannerUrl
            : type === "chuncheon"
            ? BannerPhotos.reviewChuncheonBannerUrl
            : BannerPhotos.reviewWonjuBannerUrl
        }
        subTitle="EventDetail"
        title="비안단테 이벤트 디테일"
      /> */}

      <Container>
        <EventTextWrapper>
          <EventTitle>비안단테 고성 캠핑장 얼리버드 회원권 모집</EventTitle>
          <EventDesc>회원권 30구좌 선착순 한정. 5월 정식 오픈 예정</EventDesc>
        </EventTextWrapper>

        <ImagesWrapper>
          <EventImage></EventImage>
          <EventImage></EventImage>
          <EventImage></EventImage>
          <EventImage></EventImage>
          <EventImage></EventImage>
          <EventImage></EventImage>
        </ImagesWrapper>

        <BackBtn onClick={() => toEventList()}>목록</BackBtn>
      </Container>
    </CustomContainer>
  );
};

export default EventDetail;
