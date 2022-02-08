import PageTopBanner from "components/Page/PageTopBanner";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import styled from "styled-components";
import PageReview from "components/Page/PageReview";

const Container = styled.div`
  width: 100%;
  padding: 40px 14%;
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ToggleBtn = styled.button`
  width: 100px;
  height: 60px;
  font-size: 15px;
  margin: 0 15px 20px 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.isOn ? "black" : "#b2bec3")};
  border: none;
`;

const ReviewWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
`;

const Review = () => {
  const [type, setType] = useState("");
  const [BannerPhotos, setBannerPhotos] = useState({});
  const [reviews, setReviews] = useState([]);

  const getReview = async () => {
    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });

    const reviewArray = [];
    await dbService
      .collection("Reviews")
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
  };

  useEffect(() => {
    getReview();
  }, []);

  return (
    <CustomContainer>
      <PageTopBanner
        bg={
          type === ""
            ? BannerPhotos.reviewAllBannerUrl
            : type === "chuncheon"
            ? BannerPhotos.reviewChuncheonBannerUrl
            : BannerPhotos.reviewWonjuBannerUrl
        }
        subTitle="Review"
        title="비안단테 리뷰"
      />

      <Container>
        <ToggleWrapper>
          <ToggleBtn isOn={type === ""} onClick={() => setType("")}>
            전체보기
          </ToggleBtn>
          <ToggleBtn
            isOn={type === "chuncheon"}
            onClick={() => setType("chuncheon")}
          >
            춘천점
          </ToggleBtn>
          <ToggleBtn isOn={type === "wonju"} onClick={() => setType("wonju")}>
            원주점
          </ToggleBtn>
        </ToggleWrapper>

        <ReviewWrapper>
          {reviews.map((r) => {
            if (r.stay === type || type === "") {
              return <PageReview key={r.id} r={r} />;
            }
            return null;
          })}
        </ReviewWrapper>
      </Container>
    </CustomContainer>
  );
};

export default Review;
