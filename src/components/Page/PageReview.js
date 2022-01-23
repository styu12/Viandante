import React from "react";
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
  return (
    <ReviewContainer>
      <ReviewPhoto bg={r.thumbnailUrl} />
      <ReviewTitle>{r.summary.substr(0, 50)}</ReviewTitle>
      <ReviewDate>{r.date}</ReviewDate>
    </ReviewContainer>
  );
};

export default PageReview;
