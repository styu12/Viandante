import MagazineDog from "components/MagazineDog";
import React from "react";
import {
  FlexRowContainer,
  Section,
  SectionLink,
  SectionMiniTitle,
  SectionTitle,
} from "styles/Container-style";

export const HomeMagazineDog = ({ magazines }) => {
  return (
    <Section>
      <SectionTitle isCenter={false}>
        Magazine<SectionMiniTitle>With Dog</SectionMiniTitle>
      </SectionTitle>
      <FlexRowContainer>
        {/* magazine data call and rendering */}
        {magazines.map((m) => {
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
