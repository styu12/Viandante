import FAQ from "components/FAQ";
import Slider from "components/Slider";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CustomContainer, Section, SectionTitle } from "styles/Container-style";

const RoomInfo = styled.p`
  font-size: 17px;
  margin: 10px 0;
  font-family: "GmarketSansLight";
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const RoomAvailable = styled.p`
  font-size: 13px;
  margin: 15px 0;
  font-family: "GmarketSansLight";
  @media (max-width: 768px) {
    font-size: 11px;
  }
`;

const RoomBook = styled.a`
  font-size: 17px;
  padding: 10px 20px;
  position: absolute;
  background-color: black;
  color: white;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  right: 100px;
  bottom: 30px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    font-size: 13px;
    right: 20px;
    bottom: 70%;
  }
`;

const Calendar = styled.iframe`
  width: 70%;
  height: 1200px;
  margin: 15px auto 100px auto;
  display: block;
  border: 2px solid black;
  border-radius: 15px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const RoomDetail = () => {
  const { id, roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [faqRef, setFaqRef] = useState(null);

  const getRooms = async () => {
    await dbService
      .collection("Stays")
      .doc(id)
      .collection("rooms")
      .get()
      .then((res) =>
        res.forEach((doc) => {
          if (doc.id === roomId) {
            setRoom({
              id: doc.id,
              ...doc.data(),
            });
          }
        })
      );
  };

  const getFaqRef = async () => {
    const FaqRef = await dbService
      .collection("Stays")
      .doc(id)
      .collection("FAQ");
    setFaqRef(FaqRef);
  };

  useEffect(() => {
    getRooms();
    getFaqRef();
  }, []);

  return (
    <CustomContainer>
      {room && (
        <>
          <Slider photoArray={room.photosIn} />

          <Section>
            <SectionTitle>{room?.title}</SectionTitle>
            <RoomInfo>
              {room.name} / 기준 {room.people[0]}명 (최대 {room.people[1]}명) /
              반려견 기준 {room.dog[0]}마리 (최대 {room.dog[1]}마리)
            </RoomInfo>
            <RoomAvailable>
              {room.available.map((a, i) =>
                i === room.available.length - 1 ? (
                  <span key={i}>{a} &nbsp;</span>
                ) : (
                  <span key={i}>{a} &nbsp;| &nbsp;</span>
                )
              )}
            </RoomAvailable>
            <RoomBook href={room.naverUrl} target="_blank" rel="noreferrer">
              [{room.name}] 예약하기
            </RoomBook>
          </Section>

          {/* <Calendar src={room.calendarUrl} /> */}

          <FAQ rooms={[room]} faqRef={faqRef} />
        </>
      )}
    </CustomContainer>
  );
};

export default RoomDetail;
