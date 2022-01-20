import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BasicPhotoBox,
  ContentBoldTitle,
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

const HomeStay = ({ stays }) => {
  return (
    <Section>
      <SectionTitle isCenter={true}>Viandante Stay</SectionTitle>
      <FlexRowContainer>
        {/* stays call and rendering */}
        {stays.map((s) => {
          return (
            <div key={s.id}>
              <BasicPhotoBox bg={s.thumbnailUrl}></BasicPhotoBox>
              <ContentTitle isCenter={true}>{s.description}</ContentTitle>
              <ContentBoldTitle isCenter={true}>{s.name}</ContentBoldTitle>
              <ContentLink to="/stay">객실보러가기</ContentLink>
            </div>
          );
        })}
      </FlexRowContainer>
    </Section>
  );
};

export default HomeStay;
