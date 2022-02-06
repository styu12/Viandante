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
  position: relative;
  margin-bottom: 15px;
`;

const ReviewPhoto = styled(BasicPhotoBox)`
  margin-bottom: 18px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const ReviewTitle = styled.h3`
  font-size: 17px;
  text-align: center;
  margin: 10px 0;
`;

const ReviewDesc = styled.p`
  font-size: 13px;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 5px;
`;

const ReviewDate = styled.p`
  font-size: 13px;
  text-align: center;
  font-family: "MarketSansLight";
`;

const ReviewType = styled.p`
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  font-size: 10px;
  width: 65px;
  text-align: center;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const PageReview = ({ r }) => {
  const [isPop, setIsPop] = useState(false);
  const openPop = () => {
    setIsPop(true);
  };

  return (
    <>
      <ReviewContainer onClick={openPop}>
        <ReviewPhoto bg={r.photos[0]} />
        <ReviewType>{r.type}</ReviewType>
        <ReviewTitle>{r.title}</ReviewTitle>
        <ReviewDesc>{r.description.substr(0, 50)}...</ReviewDesc>
        <ReviewDate>
          {new Date(r.date.seconds * 1000).toLocaleDateString()}
        </ReviewDate>
      </ReviewContainer>
      {isPop ? <Popup setIsPop={setIsPop} r={r} /> : null}
    </>
  );
};

export default PageReview;
