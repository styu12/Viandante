import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { CustomContainer, PhotoBackground } from "styles/Container-style";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

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
  @media (max-width: 768px) {
    margin-top: 50px;
  }
`;

const EventTitle = styled.h3`
  font-size: 27px;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

const EventDesc = styled.p`
  font-size: 18px;
  color: gray;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ImagesWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
  border-top: 1px solid black;
`;

const EventImage = styled(PhotoBackground)`
  width: 75%;
  padding-bottom: 95%;
  margin: auto;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 120%;
  }
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
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: black;
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 11px;
    width: 80px;
    height: 25px;
  }
`;

const EventDetail = () => {
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  const getEventImages = async () => {
    await dbService
      .collection("Events")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          if (doc.id === id) {
            setImages(doc.data().eventImages);
            return;
          }
        });
      });
  };

  useEffect(() => {
    getEventImages();
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
          {images.map((i) => (
            <EventImage key={i} bg={i} />
          ))}
        </ImagesWrapper>

        <BackBtn onClick={() => toEventList()}>목록</BackBtn>
      </Container>
    </CustomContainer>
  );
};

export default EventDetail;
