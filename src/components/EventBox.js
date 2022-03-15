import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PhotoBackground } from "styles/Container-style";

const EventContainer = styled.div`
  width: 100%;
`;

const EventThumb = styled(PhotoBackground)`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
  border-radius: 12px;
  cursor: pointer;
`;

const EventContentWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventTextWrapper = styled.div`
  width: 70%;
  padding-top: 15px;
`;

const EventTitle = styled.h3`
  font-size: 15px;
  margin: 10px 0;
`;

const EventDesc = styled.p`
  font-size: 11px;
  color: gray;
`;

const EventDate = styled.p`
  font-size: 9px;
  color: red;
`;

const EventMark = styled.span`
  font-size: 12px;
  color: ${(props) => (props.isOn ? "blue" : "red")};
  border: ${(props) => (props.isOn ? "1px solid blue" : "1px solid red")};
  padding: 7px 20px;
  border-radius: 10px;
`;

const EventBox = ({ type, e }) => {
  const navigate = useNavigate();

  const toEventDetail = (id) => {
    navigate(`/event/detail/${id}`);
  };

  return (
    <EventContainer>
      <EventThumb bg={e.thumbUrl} onClick={() => toEventDetail(e.id)} />
      <EventContentWrapper>
        <EventTextWrapper>
          <EventTitle>{e.title}</EventTitle>
          <EventDesc>{e.desc}</EventDesc>
          <EventDate>
            {new Date(e.startDate.seconds * 1000).toLocaleDateString()} ~{" "}
            {new Date(e.endDate.seconds * 1000).toLocaleDateString()}
          </EventDate>
        </EventTextWrapper>

        <EventMark isOn={type}>{type ? "진행중" : "종료"}</EventMark>
      </EventContentWrapper>
    </EventContainer>
  );
};

export default EventBox;
