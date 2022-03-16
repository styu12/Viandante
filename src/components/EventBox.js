import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const EventContainer = styled.div`
  width: 100%;
`;

const EventThumb = styled.div`
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 15px;
  border-radius: 12px;
  cursor: ${(props) => (props.isOn ? "pointer" : "null")};
  background: ${(props) =>
    props.isOn
      ? ` url(${props.bg})`
      : `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${props.bg})`};
  background-position: center center;
  background-size: cover;
`;

const EventContentWrapper = styled.div`
  width: 100%;
  padding: 10px 20px;
  border-top: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

const EventTextWrapper = styled.div`
  width: 70%;
  padding-top: 15px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const EventTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const EventDesc = styled.p`
  font-size: 13px;
  color: gray;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const EventDate = styled.span`
  font-size: 11px;
  display: block;
  width: 170px;
  text-align: center;
  padding: 5px;
  color: ${(props) => (props.isOn ? "#2c3e50" : "#7f8c8d")};
  border: ${(props) =>
    props.isOn ? "1px solid  #2c3e50" : "1px solid #7f8c8d"};
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 9px;
    margin-bottom: 10px;
    border: none;
  }
`;

const EventMark = styled.span`
  font-size: 12px;
  color: ${(props) => (props.isOn ? "blue" : "#7f8c8d")};
  border: ${(props) => (props.isOn ? "1px solid blue" : "1px solid #7f8c8d")};
  padding: 7px 20px;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 9px;
    padding: 5px 18px;
    border-radius: 5px;
  }
`;

const EventBox = ({ type, e }) => {
  const navigate = useNavigate();

  const toEventDetail = (id) => {
    navigate(`/event/detail/${id}`);
  };

  return (
    <EventContainer>
      <EventThumb
        bg={e.thumbUrl}
        onClick={() => (e.isOn ? toEventDetail(e.id) : null)}
        isOn={e.isOn}
      />
      <EventContentWrapper>
        <EventTextWrapper>
          <EventTitle>{e.title}</EventTitle>
          <EventDesc>{e.desc}</EventDesc>
          <EventDate isOn={e.isOn}>
            {new Date(e.startDate.seconds * 1000).toLocaleDateString()} ~{" "}
            {new Date(e.endDate.seconds * 1000).toLocaleDateString()}
          </EventDate>
        </EventTextWrapper>

        <EventMark isOn={e.isOn}>{e.isOn ? "진행중" : "종료"}</EventMark>
      </EventContentWrapper>
    </EventContainer>
  );
};

export default EventBox;
