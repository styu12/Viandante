import Popup from "components/Popup";
import React, { useState } from "react";
import styled from "styled-components";
import { BasicPhotoBox } from "styles/Container-style";

const ReviewContainer = styled.div`
  width: 100%;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.03);
  }
`;

const ReviewPhoto = styled(BasicPhotoBox)`
  margin-bottom: 25px;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const ReviewTitle = styled.h3`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 15px;
`;

const ReviewDate = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: "MarketSansLight";
`;

const PageReview = ({ r }) => {
  const [isPop, setIsPop] = useState(false);
  const openPop = () => {
    setIsPop(true);
  };

  return (
    <>
      <ReviewContainer>
        <ReviewPhoto bg={r.photos[0]} onClick={openPop} />
        <ReviewTitle>{r.description.substr(0, 50)}</ReviewTitle>
        <ReviewDate>
          {new Date(r.date.seconds * 1000).toLocaleDateString()}
        </ReviewDate>
      </ReviewContainer>
      {isPop ? <Popup setIsPop={setIsPop} r={r} /> : null}
    </>
  );
};

export default PageReview;
