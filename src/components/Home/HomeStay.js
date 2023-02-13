import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router";
import {
  BasicPhotoBox,
  ContentTitle,
  FlexRowContainer,
  Section,
  SectionTitle,
} from "styles/Container-style";

const ContentLink = styled(Link)`
  font-size: 14px;
  color: blue;
  text-decoration: none;
  padding-bottom: 1px;
  border-bottom: 1px solid blue;
  text-align: center;
  display: block;
  margin: auto;
  width: 82px;
`;

const StayPhotoBox = styled(BasicPhotoBox)`
  cursor: pointer;
  transition: transform 0.3s;
  /* box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.3); */
  width: 40%;
  padding-bottom: 40%;
  border-radius: 10px;
  margin: 15px auto 30px auto;
  &:hover {
    transform: scale(1.01);
  }
`;

const StaySubTitle = styled.p`
  font-size: 15px;
  font-family: "GmarketSansLight";
  margin: 15px 0 8px 0;
  text-align: center;
`;

const StayLink = styled(ContentLink)`
  color: gray;
  text-transform: uppercase;
  border-bottom: none;
  transition: color 0.3s;
  &:hover {
    color: black;
  }
`;

const HomeStay = ({ stays }) => {
  const navigate = useNavigate();
  const toStay = (id) => {
    navigate(`/stay/detail/${id}`);
  };

  return (
    <Section>
      <SectionTitle isCenter={true}>Viandante Stay</SectionTitle>
      <FlexRowContainer>
        {/* stays call and rendering */}
        {stays.map((s) => {
          if(s.name === "비안단테 원주") {
            return null
          }
          return (
            <div key={s.id}>
              <StayPhotoBox
                bg={s.thumbnailUrl}
                onClick={() => toStay(s.id)}
              ></StayPhotoBox>
              <StaySubTitle isCenter={true}>{s.description}</StaySubTitle>
              <ContentTitle isCenter={true}>{s.name}</ContentTitle>
              <StayLink to={`/stay/detail/${s.id}`}>Read More</StayLink>
            </div>
          );
        })}
      </FlexRowContainer>
    </Section>
  );
};

export default HomeStay;
