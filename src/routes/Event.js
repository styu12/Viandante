import PageTopBanner from "components/Page/PageTopBanner";
import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import styled from "styled-components";
import EventBox from "components/EventBox";

const Container = styled.div`
  width: 100%;
  padding: 40px 14%;
  @media (max-width: 768px) {
    padding: 20px 5%;
  }
`;

const ToggleWrapper = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ToggleBtn = styled.button`
  width: 100px;
  height: 60px;
  font-size: 15px;
  margin: 0 15px 20px 0;
  outline: none;
  background-color: rgba(0, 0, 0, 0);
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  color: ${(props) => (props.isOn ? "black" : "#b2bec3")};
  border: none;
  @media (max-width: 768px) {
    font-size: 14px;
    width: 80px;
  }
`;

const EventWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
  @media (max-width: 768px) {
    margin: auto;
    grid-gap: 20px;
  }
`;

const Event = () => {
  const [type, setType] = useState(true);
  const [BannerPhotos, setBannerPhotos] = useState({});
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });

    const eventArray = [];
    await dbService
      .collection("Events")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          eventArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setEvents(eventArray);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <CustomContainer>
      <PageTopBanner
        bg={BannerPhotos.topBannerUrl}
        subTitle="Event"
        title="비안단테 이벤트"
      />

      <Container>
        <ToggleWrapper>
          <ToggleBtn isOn={type} onClick={() => setType(true)}>
            진행중
          </ToggleBtn>
          <ToggleBtn isOn={!type} onClick={() => setType(false)}>
            종료
          </ToggleBtn>
        </ToggleWrapper>

        <EventWrapper>
          {events.map((e) => {
            if (e.isOn === type) {
              return <EventBox key={e.id} type={type} e={e} />;
            }
            return null;
          })}
        </EventWrapper>
      </Container>
    </CustomContainer>
  );
};

export default Event;
