import FAQ from "components/FAQ";
import MagazineSpace from "components/MagazineSpace";
import NaverMapLoadable from "components/Map";
import Slider from "components/Slider";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  CustomContainer,
  PhotoBackground,
  Section,
  SectionMiniTitle,
  SectionTitle,
} from "styles/Container-style";

const StayTitle = styled.h2`
  font-size: 26px;
  margin: 20px 0;
  @media (max-width: 768px) {
    font-size: 15px;
    margin: 10px 0;
  }
`;

const StayLocation = styled(SectionMiniTitle)`
  display: block;
  margin-top: 20px;
`;

const StayMapLink = styled.a`
  background-color: #636e72;
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
  margin-left: 20px;
  text-decoration: none;
  &:hover {
    font-size: 14px;
    padding: 7px 10px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
    &:hover {
      font-size: 10px;
    }
  }
`;

const RoomInfoBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px 20px;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  @media (max-width: 768px) {
    padding: 10px 12px;
  }
`;

const RoomInfoTitle = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const RoomInfo = styled.span`
  font-size: 16px;
  font-family: "GmarketSansLight";
  margin-bottom: 3px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const RoomInfoClick = styled.span`
  position: absolute;
  font-size: 14px;
  right: 20px;
  bottom: 18px;
  @media (max-width: 768px) {
    font-size: 9px;
    right: 10px;
    bottom: 10px;
  }
`;

const RoomPhoto = styled(PhotoBackground)`
  width: 40%;
  padding-bottom: 40%;
  margin: 20px;
  cursor: pointer;
  position: relative;
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s;
  border-radius: 10px;
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 768px) {
    width: 90%;
    padding-bottom: 90%;
    margin-bottom: 0;
  }
`;

const StayIntro = styled.p`
  font-size: 15px;
  font-family: "GmarketSansLight";
  width: 50%;
  line-height: 2;
  text-align: center;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 9px;
    width: 100%;
  }
`;

const AppealBanner = styled.div`
  width: 100%;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
  color: white;
  padding-top: 50px;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const AppealBannerTitle = styled.h2`
  font-size: 20px;
  font-family: "GmarketSansLight";
  letter-spacing: 17px;
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const AppealContentWrapper = styled.div`
  padding: 30px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px 5% 50px 5%;
  }
`;

const AppealContent = styled.div`
  font-size: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 27%;
  padding: 40px 30px;
  height: 300px;
  text-align: center;
  @media (max-width: 768px) {
    width: 80%;
    height: 280px;
  }
`;

const AppealIcon = styled(PhotoBackground)`
  width: 150px;
  height: 50px;
  margin: auto;
  opacity: 0.7;
  background-size: contain;
  background-repeat: no-repeat;
`;

const AppealTitle = styled.h4`
  font-size: 20px;
  margin: 20px 0;
  letter-spacing: 3px;
`;

const AppealDesc = styled.p`
  font-size: 13px;
  line-height: 1.8;
  font-family: "GmarketSansLight";
`;

const MagazineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  > div {
    width: 45%;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div {
      width: 100%;
    }
  }
`;

const StayDetail = () => {
  const { id } = useParams();
  const [stay, setStay] = useState(null);
  const [rooms, setRooms] = useState([]);
  const [appeals, setAppeals] = useState([]);
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

  const getAppeals = async () => {
    const appealsArray = [];
    await dbService
      .collection("Stays")
      .doc(id)
      .collection("appeals")
      .get()
      .then((res) =>
        res.forEach((doc) =>
          appealsArray.push({
            id: doc.id,
            ...doc.data(),
          })
        )
      );
    setAppeals(appealsArray);
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
    getAppeals();
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
              <br></br>
              <StayLocation>
                {stay.location}
                <StayMapLink href={stay.locationUrl} target="_blank">
                  {" "}
                  &nbsp;&rarr; 네이버 지도로 보기
                </StayMapLink>
              </StayLocation>
            </StayTitle>
            <SectionTitle isCenter={false}>Rooms</SectionTitle>
            {rooms.map((r) => (
              <div key={r.id}>
                <RoomPhoto
                  bg={r.thumbnailUrl}
                  onClick={() => toRoomDetail(r.id)}
                >
                  <RoomInfoBox>
                    <RoomInfoTitle>{r.name}</RoomInfoTitle>
                    <RoomInfo>{r.price[2]}0,000원 ~</RoomInfo>
                    <RoomInfo>
                      기준 {r.people[0]}명 (최대 {r.people[1]}명)
                    </RoomInfo>
                    <RoomInfo>
                      반려견 기준 {r.dog[0]}마리 (최대 {r.dog[1]}마리)
                    </RoomInfo>
                    <RoomInfoClick>자세히 보러가기</RoomInfoClick>
                  </RoomInfoBox>
                </RoomPhoto>
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
            <AppealBannerTitle>SPECIAL</AppealBannerTitle>
            <AppealContentWrapper>
              {appeals.map((a) => (
                <AppealContent key={a.id}>
                  <AppealIcon bg={a.iconUrl} />
                  <AppealTitle>{a.title}</AppealTitle>
                  <AppealDesc>{a.desc}</AppealDesc>
                </AppealContent>
              ))}
            </AppealContentWrapper>
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

          {/* <NaverMapLoadable /> */}
        </>
      )}
    </CustomContainer>
  );
};

export default StayDetail;
