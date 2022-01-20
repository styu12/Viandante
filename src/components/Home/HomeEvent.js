import React from "react";
import styled from "styled-components";
import {
  BasicPhotoBox,
  ContentText,
  ContentTitle,
  FlexRowContainer,
  Section,
  SectionTitle,
} from "styles/Container-style";

//이벤트 관련 components
const EventSection = styled(Section)`
  background: linear-gradient(#ededed 62%, #fafafa 38%);
`;

const EventContainer = styled(FlexRowContainer)`
  margin-bottom: 50px;
`;

const EventPhoto = styled(BasicPhotoBox)`
  flex: 1;
  padding-bottom: 33%;
  position: relative;
`;

const EventPhotoMark = styled.span`
  background-color: white;
  color: blue;
  position: absolute;
  top: 30px;
  right: 35px;
  font-size: 11px;
  padding: 5px 13px;
  border-radius: 3px;
`;

const EventDescWrapper = styled.div`
  flex: 2;
`;

const HomeEvent = () => {
  return (
    <EventSection>
      <SectionTitle isCenter={false}>Event</SectionTitle>
      <ContentTitle>
        비안단테 펜션은 매달 이벤트를 통해 두 팀에게 50만원 상당의 무료 숙박권을
        드리는 초 대박 이벤트를 진행합니다.
      </ContentTitle>
      <EventContainer>
        <EventPhoto bg={require("../../assets/main/eventThumbnail.png")}>
          <EventPhotoMark>진행중</EventPhotoMark>
        </EventPhoto>
        <EventDescWrapper>
          <ContentTitle>이벤트 기간 ☑</ContentTitle>
          <ContentText>매월 1일 ~ 20일</ContentText>
          <br />
          <ContentTitle>참여 방법 ☑</ContentTitle>
          <ContentText>
            기존 팔로워 분들도 당연히 참여 가능합니다 :)
          </ContentText>
          <br />
          <ContentText>1. viandante_official 팔로우 하기</ContentText>
          <br />
          <ContentText>2. 이 게시물 좋아요 + 이 게시물 저장</ContentText>
          <br />
          <ContentText>
            3. 인스타그램 스토리 공유 + 공유한 스토리에 viandante_official 언급
            필수!
          </ContentText>
          <br />
          <ContentText>
            4. 이 게시물에 친구 3명 이상 태그 후 참여완료 댓글 남기기
          </ContentText>
        </EventDescWrapper>
      </EventContainer>
      <EventContainer>
        <div>
          <ContentTitle>당첨자 발표 ☑</ContentTitle>
          <ContentText>
            매월 21일 오후 8시 추첨으로 진행할 예정입니다.
          </ContentText>
          <br />
          <ContentTitle>이벤트 상품 ☑</ContentTitle>
          <ContentText>
            - 1박 평일 무료 숙박권
            <br />
            - Viandante Chuncheon 한옥펜션 한 팀<br />
            - Viandante Wonju B동 한 팀<br />두 곳 모두 애견 동반 가능합니다.
          </ContentText>
        </div>
        <div>
          <ContentText>
            자세한 사진 및 정보는 네이버 비안단테 펜션 검색 <br />
            또는 홈페이지 참조
          </ContentText>
          <br />
          <ContentTitle>참고 사항 ☑</ContentTitle>
          <ContentText>
            - 숙박 가능 기간: 9월 이벤트 당첨자는 다음 달인 10월 평일 숙박을
            도와드립니다.
            <br />
            - 비공개 및 부계정, 이벤트 헌터는 추첨 제외
            <br />- 숙박 후 인스타 업로드 필수 조건
          </ContentText>
          <br />
        </div>
      </EventContainer>
      <a href="http://www.naver.com" target="_blank" rel="noreferrer">
        {" "}
        &gt; 인스타 참여하기
      </a>
    </EventSection>
  );
};

export default HomeEvent;
