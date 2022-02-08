import FAQ from "components/FAQ";
import MagazineSpace from "components/MagazineSpace";
import Slider from "components/Slider";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CustomContainer,
  PhotoBackground,
  Section,
  SectionTitle,
} from "styles/Container-style";

const StayTitle = styled.h2`
  font-size: 26px;
  margin: 20px 0;
`;

const RoomInfo = styled.span`
  font-size: 17px;
  margin: 10px 0;
  font-family: "GmarketSansLight";
`;

const RoomPhoto = styled(PhotoBackground)`
  width: 60%;
  padding-bottom: 40%;
  margin: 20px;
  cursor: pointer;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  border-radius: 10px;
  &:hover {
    transform: scale(1.02);
  }
`;

const StayIntro = styled.p`
  font-size: 15px;
  font-family: "GmarketSansLight";
  width: 50%;
  line-height: 2;
  text-align: center;
  margin: auto;
`;

const AppealBanner = styled.div`
  width: 100%;
  height: 400px;
  padding: 30px 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

const AppealContent = styled.div`
  font-size: 20px;
  color: white;
`;

const MagazineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  > div {
    width: 45%;
  }
`;

const StayDetail = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [faqRef, setFaqRef] = useState(null);
  const navigate = useNavigate();

  const getStay = async () => {
    //review data call
    await dbService
      .collection("Stays")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          if (doc.id === id) {
            setStay({
              id: doc.id,
              ...doc.data(),
            });
          }
        });
      });
  };

  const getRooms = async () => {
    const roomsArray = [];
    await dbService
      .collection("Stays")
      .doc(id)
      .collection("rooms")
      .get()
      .then((res) =>
        res.forEach((doc) =>
          roomsArray.push({
            id: doc.id,
            ...doc.data(),
          })
        )
      );
    setRooms(roomsArray);
  };

  const getMagazines = async () => {
    const magazinesArray = [];
    await dbService
      .collection("Magazines")
      .where("author", "==", stay ? stay.name : "비안단테 춘천")
      .orderBy("createdAt", "desc")
      .limit(2)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          magazinesArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setMagazines(magazinesArray);
  };

  const getFaqRef = async () => {
    const FaqRef = await dbService
      .collection("Stays")
      .doc(id)
      .collection("FAQ");
    setFaqRef(FaqRef);
  };

  const toRoomDetail = (roomId) => {
    navigate(roomId);
  };

  useEffect(() => {
    getStay();
    getRooms();
    getMagazines();
    getFaqRef();
  }, []);

  return (
    <CustomContainer>
      {stay && (
        <>
          <Slider photoArray={stay.photosOut} />

          <Section>
            <StayTitle>
              {stay.description} &nbsp;| &nbsp;{stay.name}
            </StayTitle>
            <SectionTitle isCenter={false}>Rooms</SectionTitle>
            {rooms.map((r) => (
              <div key={r.id}>
                <RoomInfo>
                  {r.name} / 기준 {r.people[0]}명 (최대 {r.people[1]}명) /
                  반려견 기준 {r.dog[0]}마리 (최대 {r.dog[1]}마리)
                </RoomInfo>
                <RoomPhoto
                  bg={r.thumbnailUrl}
                  onClick={() => toRoomDetail(r.id)}
                />
              </div>
            ))}
          </Section>

          <Section>
            <SectionTitle isCenter={true}>{stay.description}</SectionTitle>
            <StayIntro>
              {stay.introText.split("\\n").map((e, i) => (
                <span key={i}>
                  {e}
                  <br></br>
                </span>
              ))}
            </StayIntro>
          </Section>

          <AppealBanner bg={stay.appealUrl}>
            <AppealContent>한옥!</AppealContent>
            <AppealContent>벽난로!</AppealContent>
            <AppealContent>황토!</AppealContent>
          </AppealBanner>

          <Section>
            <SectionTitle isCenter={false}>
              Magazine &nbsp;| &nbsp;{stay.name}
            </SectionTitle>
            <MagazineWrapper>
              {magazines.map((m) => (
                <div key={m.id}>
                  <MagazineSpace m={m} />
                </div>
              ))}
            </MagazineWrapper>
          </Section>

          <FAQ rooms={rooms} faqRef={faqRef} />
        </>
      )}
    </CustomContainer>
  );
};

export default StayDetail;
