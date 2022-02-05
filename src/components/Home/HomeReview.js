import Popup from "components/Popup";
import React, { useState } from "react";
import styled from "styled-components";
import { ContentTitle, PhotoBackground } from "styles/Container-style";

//리뷰 관련 components

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

const HomeReview = ({ r, stays }) => {
  const [isPop, setIsPop] = useState(false);
  const openPop = () => {
    setIsPop(true);
  };

  let r_stay;
  // r.stay_id를 state에 있는 stay의 id와 비교해서 일치하면 stay의 name을 가져옴!
  stays.forEach((s) => {
    if (s.title === r.stay) {
      r_stay = s.name;
    }
  });

  return (
    <>
      <ReviewBox key={r.id} onClick={openPop}>
        <ReviewPhoto bg={r.photos[0]} />
        <ReviewContent>
          <ReviewType>{r.type}</ReviewType>
          <ContentTitle>
            {new Date(r.date.seconds * 1000).toLocaleDateString()} / {r_stay}
          </ContentTitle>
          <ReviewText>{r.description.substr(0, 100)}...</ReviewText>
        </ReviewContent>
      </ReviewBox>
      {isPop ? <Popup setIsPop={setIsPop} r={r} /> : null}
    </>
  );
};

export default HomeReview;
