import React from "react";
import styled from "styled-components";
import {
  ContentTitle,
  FlexRowContainer,
  PhotoBackground,
  Section,
  SectionLink,
  SectionTitle,
} from "styles/Container-style";

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

const HomeReview = ({ reviews, stays }) => {
  return (
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
  );
};

export default HomeReview;
