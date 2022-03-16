import React, { useEffect, useState } from "react";
import { CustomContainer } from "styles/Container-style";
import styled from "styled-components";
import MagazineDog from "components/MagazineDog";
import { dbService } from "fbase";
import PageTopBanner from "components/Page/PageTopBanner";
import MagazineSpace from "components/MagazineSpace";

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

const MagazineWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.isDog ? "repeat(3,1fr)" : "repeat(2,1fr)"};
  grid-gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

const Magazine = () => {
  const [type, setType] = useState("dog");
  const [BannerPhotos, setBannerPhotos] = useState({});

  const [dogMagazines, setDogMagazines] = useState([]);
  const [spaceMagazines, setSpaceMagazines] = useState([]);

  const getMagazine = async () => {
    // dogMagazines data call
    const dogMagazinesArray = [];
    await dbService
      .collection("Magazines")
      .where("type", "==", "Dog")
      .orderBy("createdAt", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          dogMagazinesArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setDogMagazines(dogMagazinesArray);

    // spaceMagazines data call
    const spaceMagazinesArray = [];
    await dbService
      .collection("Magazines")
      .where("type", "==", "Space")
      .orderBy("createdAt", "desc")
      .get()
      .then((res) => {
        res.forEach((doc) => {
          spaceMagazinesArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      });
    setSpaceMagazines(spaceMagazinesArray);

    // main banner data call
    await dbService.collection("MainBanner").onSnapshot((snapshot) => {
      const mainBannerArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBannerPhotos(mainBannerArray[0]);
    });
  };

  useEffect(() => {
    getMagazine();
  }, []);

  return (
    <CustomContainer>
      <PageTopBanner
        bg={
          type === "dog"
            ? BannerPhotos.dogBannerUrl
            : BannerPhotos.spaceBannerUrl
        }
        subTitle="Magazine"
        title="비안단테 매거진"
      />

      <Container>
        <ToggleWrapper>
          <ToggleBtn isOn={type === "dog"} onClick={() => setType("dog")}>
            강아지
          </ToggleBtn>
          <ToggleBtn isOn={type === "space"} onClick={() => setType("space")}>
            공간
          </ToggleBtn>
        </ToggleWrapper>

        <MagazineWrapper isDog={type === "dog"}>
          {type === "dog"
            ? dogMagazines.map((m) => (
                <div key={m.id}>
                  <MagazineDog m={m} />
                </div>
              ))
            : spaceMagazines.map((m) => (
                <div key={m.id}>
                  <MagazineSpace m={m} />
                </div>
              ))}
        </MagazineWrapper>
      </Container>
    </CustomContainer>
  );
};

export default Magazine;
