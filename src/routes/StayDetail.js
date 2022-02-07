import MagazineSpace from "components/MagazineSpace";
import Slider from "components/Slider";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  width: 80%;
  padding-bottom: 40%;
  margin: auto;
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

const FAQContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 50px 8%;
`;

const FAQTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 20px;
`;

const FAQWrapper = styled.div`
  display: flex;
`;

const FAQFilterWrapper = styled.div`
  flex: 1;
`;

const FAQFilter = styled.p`
  font-size: 13px;
  margin-bottom: 10px;
  color: gray;
  cursor: pointer;
`;

const FAQContentWrapper = styled.div`
  flex: 3;
`;

const FAQContent = styled.p`
  font-size: 15px;
  line-height: 1.5;
  width: 70%;
  text-align: center;
`;

const StayDetail = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [magazines, setMagazines] = useState([]);

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

  useEffect(() => {
    getStay();
  }, []);
  useEffect(() => {
    getRooms();
    getMagazines();
  }, [stay]);

  return (
    <CustomContainer>
      {stay ? <Slider photoArray={stay.photosOut} /> : "No Stay"}

      <Section>
        <StayTitle>
          {stay?.description} &nbsp;| &nbsp;{stay?.name}
        </StayTitle>
        <SectionTitle isCenter={false}>Rooms</SectionTitle>
        {rooms.map((r) => (
          <div key={r.id}>
            <RoomInfo>
              {r.name} / 기준 {r.people[0]}명 (최대 {r.people[1]}명) / 반려견
              기준 {r.dog[0]}마리 (최대 {r.dog[1]}마리)
            </RoomInfo>
            <RoomPhoto bg={r.thumbnailUrl} />
          </div>
        ))}
      </Section>

      <Section>
        <SectionTitle isCenter={true}>{stay?.description}</SectionTitle>
        <StayIntro>
          {stay?.introText.split("\\n").map((e, i) => (
            <span key={i}>
              {e}
              <br></br>
            </span>
          ))}
        </StayIntro>
      </Section>

      <AppealBanner bg={stay?.appealUrl}>
        <AppealContent>한옥!</AppealContent>
        <AppealContent>벽난로!</AppealContent>
        <AppealContent>황토!</AppealContent>
      </AppealBanner>

      <Section>
        <SectionTitle isCenter={false}>
          Magazine &nbsp;| &nbsp;{stay?.name}
        </SectionTitle>
        <MagazineWrapper>
          {magazines.map((m) => (
            <div key={m.id}>
              <MagazineSpace m={m} />
            </div>
          ))}
        </MagazineWrapper>
      </Section>

      <FAQContainer>
        <FAQTitle>FAQ</FAQTitle>
        <FAQWrapper>
          <FAQFilterWrapper>
            <FAQFilter>이용요금</FAQFilter>
            <FAQFilter>반려견 몇마리?</FAQFilter>
            <FAQFilter>반려견 몇마리?</FAQFilter>
            <FAQFilter>반려견 몇마리?</FAQFilter>
            <FAQFilter>반려견 몇마리?</FAQFilter>
            <FAQFilter>반려견 몇마리?</FAQFilter>
          </FAQFilterWrapper>
          <FAQContentWrapper>
            <FAQContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              veritatis hic reiciendis harum repellendus dolore dolorem
              recusandae quisquam, asperiores dolor suscipit, quos fugit.
              Possimus ducimus natus aperiam facere sapiente temporibus.
            </FAQContent>
          </FAQContentWrapper>
        </FAQWrapper>
      </FAQContainer>
    </CustomContainer>
  );
};

export default StayDetail;
