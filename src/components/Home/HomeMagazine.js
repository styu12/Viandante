import MagazineDog from "components/MagazineDog";
import MagazineSpace from "components/MagazineSpace";
import React from "react";
import {
  FlexRowContainer,
  Section,
  SectionLink,
  SectionMiniTitle,
  SectionTitle,
} from "styles/Container-style";

export const HomeMagazineDog = ({ dogMagazines }) => {
  return (
    <Section>
      <SectionTitle isCenter={false}>
        Magazine<SectionMiniTitle>With Dog</SectionMiniTitle>
      </SectionTitle>
      <FlexRowContainer>
        {/* magazine data call and rendering */}
        {dogMagazines.map((m) => {
          return (
            <div key={m.id}>
              <MagazineDog m={m} />
            </div>
          );
        })}
      </FlexRowContainer>
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
      <FlexRowContainer>
        {/* magazine data call and rendering */}
        {spaceMagazines.map((m) => {
          return (
            <div key={m.id}>
              <MagazineSpace m={m} />
            </div>
          );
        })}
      </FlexRowContainer>
      <SectionLink to="/magazine"> &gt; 매거진 더보기</SectionLink>
    </Section>
  );
};
