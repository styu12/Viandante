import MagazineDog from "components/MagazineDog";
import MagazineSpace from "components/MagazineSpace";
import React from "react";
import styled from "styled-components";
import {
  FlexRowContainer,
  Section,
  SectionLink,
  SectionMiniTitle,
  SectionTitle,
} from "styles/Container-style";

const HomeMagazineWrapper = styled(FlexRowContainer)`
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

export const HomeMagazineDog = ({ dogMagazines }) => {
  return (
    <Section>
      <SectionTitle isCenter={false}>
        Magazine<SectionMiniTitle>With Dog</SectionMiniTitle>
      </SectionTitle>
      <HomeMagazineWrapper>
        {/* magazine data call and rendering */}
        {dogMagazines.map((m) => {
          return (
            <div key={m.id}>
              <MagazineDog m={m} />
            </div>
          );
        })}
      </HomeMagazineWrapper>
      <SectionLink to="/magazine"> &gt; 매거진 더보기</SectionLink>
    </Section>
  );
};

export const HomeMagazineSpace = ({ spaceMagazines }) => {
  return (
    <Section>
      <SectionTitle isCenter={false}>
        Magazine<SectionMiniTitle>With Space</SectionMiniTitle>
      </SectionTitle>
      <HomeMagazineWrapper>
        {/* magazine data call and rendering */}
        {spaceMagazines.map((m) => {
          return (
            <div key={m.id}>
              <MagazineSpace m={m} />
            </div>
          );
        })}
      </HomeMagazineWrapper>
      <SectionLink to="/magazine"> &gt; 매거진 더보기</SectionLink>
    </Section>
  );
};
